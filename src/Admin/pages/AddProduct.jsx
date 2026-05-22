import React, { useState } from "react";

const AddProduct = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    brand: "",
    status: "active",
  });

  const [editId, setEditId] = useState(null);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add / Update product
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name) return;

    if (editId) {
      // update
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editId ? { ...p, ...form } : p
        )
      );
      setEditId(null);
    } else {
      // add
      const newProduct = {
        id: Date.now(),
        ...form,
      };
      setProducts([...products, newProduct]);
    }

    setForm({
      name: "",
      description: "",
      category: "",
      brand: "",
      status: "active",
    });
  };

  // Delete
  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // Edit
  const handleEdit = (product) => {
    setForm(product);
    setEditId(product.id);
  };

  return (
    <div className="p-4 space-y-6">
      
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={form.brand}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 rounded md:col-span-2"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded md:col-span-2 hover:bg-blue-600"
        >
          {editId ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Category</th>
              <th className="p-2">Brand</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t text-center">
                <td className="p-2">{p.name}</td>
                <td className="p-2">{p.category}</td>
                <td className="p-2">{p.brand}</td>
                <td className="p-2">{p.status}</td>

                <td className="p-2 space-x-2">
                  <button
                    onClick={() => handleEdit(p)}
                    className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500"
                  >
                    Update
                  </button>

                  <button
                    onClick={() => handleDelete(p.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {products.length === 0 && (
              <tr>
                <td colSpan="5" className="p-4 text-center">
                  No products added
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddProduct;