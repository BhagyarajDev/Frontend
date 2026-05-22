import React, { useState } from "react";
import axios from "axios";

const AddImage = ({ products = [] }) => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);

  // Handle file select
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // Upload to Cloudinary
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!image || !selectedProduct) {
      alert("Select product and image");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "ml_default");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dsx2ua0nk/image/upload",
        formData
      );

      const imageUrl = res.data.secure_url;

      // Save locally (UI only)
      setUploadedImages([
        ...uploadedImages,
        {
          product_id: selectedProduct,
          url: imageUrl,
        },
      ]);

      setImage(null);
      setPreview("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4 space-y-6">

      {/* Form */}
      <form
        onSubmit={handleUpload}
        className="bg-white p-4 rounded shadow space-y-4"
      >
        <h2 className="text-lg font-semibold">Add Product Image</h2>

        {/* Product Dropdown */}
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Product</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>

        {/* File Input */}
        <input
          type="file"
          onChange={handleFileChange}
          className="border p-2 rounded w-full"
        />

        {/* Preview */}
        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-32 h-32 object-cover rounded"
          />
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Upload Image
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Product</th>
              <th className="p-2">Image</th>
            </tr>
          </thead>

          <tbody>
            {uploadedImages.map((img, index) => {
              const product = products.find(
                (p) => p.id == img.product_id
              );

              return (
                <tr key={index} className="border-t text-center">
                  <td className="p-2">{product?.name}</td>
                  <td className="p-2">
                    <img
                      src={img.url}
                      alt=""
                      className="w-16 h-16 object-cover mx-auto"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddImage;