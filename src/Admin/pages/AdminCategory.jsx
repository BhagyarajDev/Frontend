import React, { useState } from "react";

const CategoryPage = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics", parent_id: null },
    { id: 2, name: "Mobiles", parent_id: 1 },
  ]);

  const [form, setForm] = useState({
    name: "",
    parent_id: "",
  });

  // Add category (UI only)
  const handleAdd = (e) => {
    e.preventDefault();

    if (!form.name) return;

    const newCategory = {
      id: Date.now(),
      name: form.name,
      parent_id: form.parent_id || null,
    };

    setCategories([...categories, newCategory]);
    setForm({ name: "", parent_id: "" });
  };

  // Delete category (UI only)
  const handleDelete = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Category Management</h1>

      {/* Add Category */}
      <form
        onSubmit={handleAdd}
        className="bg-white p-4 rounded shadow mb-6 flex flex-col sm:flex-row gap-3"
      >
        <input
          type="text"
          placeholder="Category Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="border p-2 rounded w-full"
        />

        <input
          type="number"
          placeholder="Parent ID (optional)"
          value={form.parent_id}
          onChange={(e) =>
            setForm({ ...form, parent_id: e.target.value })
          }
          className="border p-2 rounded w-full"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Parent ID</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id} className="border-t">
                <td className="p-3">{cat.id}</td>
                <td className="p-3">{cat.name}</td>
                <td className="p-3">{cat.parent_id || "-"}</td>

                <td className="p-3 flex justify-center gap-2">
                  <button className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500">
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(cat.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {categories.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center p-4">
                  No categories found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryPage;