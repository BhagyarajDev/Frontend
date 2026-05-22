import React, { useState } from "react";

const AddVarient = ({ products = [] }) => {
  const [variants, setVariants] = useState([]);

  const [form, setForm] = useState({
    product_id: "",
    sku: "",
    price: "",
    stock: "",
    color: "",
    size: "",
  });

  const [editId, setEditId] = useState(null);

  // handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // add / update
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.product_id || !form.sku) return;

    if (editId) {
      // update
      setVariants((prev) =>
        prev.map((v) =>
          v.id === editId ? { ...v, ...form } : v
        )
      );
      setEditId(null);
    } else {
      // add
      const newVariant = {
        id: Date.now(),
        ...form,
      };
      setVariants([...variants, newVariant]);
    }

    setForm({
      product_id: "",
      sku: "",
      price: "",
      stock: "",
      color: "",
      size: "",
    });
  };

  // delete
  const handleDelete = (id) => {
    setVariants(variants.filter((v) => v.id !== id));
  };

  // edit
  const handleEdit = (variant) => {
    setForm(variant);
    setEditId(variant.id);
  };

  return (
    <div className="p-4 space-y-6">

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {/* Product Dropdown */}
        <select
          name="product_id"
          value={form.product_id}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Select Product</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="sku"
          placeholder="SKU"
          value={form.sku}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="color"
          placeholder="Color"
          value={form.color}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="size"
          placeholder="Size"
          value={form.size}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded md:col-span-2 hover:bg-blue-600"
        >
          {editId ? "Update Variant" : "Add Variant"}
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Product</th>
              <th className="p-2">SKU</th>
              <th className="p-2">Price</th>
              <th className="p-2">Stock</th>
              <th className="p-2">Color</th>
              <th className="p-2">Size</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {variants.map((v) => {
              const product = products.find(
                (p) => p.id == v.product_id
              );

              return (
                <tr key={v.id} className="border-t text-center">
                  <td className="p-2">{product?.name}</td>
                  <td className="p-2">{v.sku}</td>
                  <td className="p-2">{v.price}</td>
                  <td className="p-2">{v.stock}</td>
                  <td className="p-2">{v.color}</td>
                  <td className="p-2">{v.size}</td>

                  <td className="p-2 space-x-2">
                    <button
                      onClick={() => handleEdit(v)}
                      className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500"
                    >
                      Update
                    </button>

                    <button
                      onClick={() => handleDelete(v.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}

            {variants.length === 0 && (
              <tr>
                <td colSpan="7" className="p-4 text-center">
                  No variants added
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddVarient;