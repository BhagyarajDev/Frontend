import React, { useState } from "react";
import AddProduct from "./AddProduct";
import AddImage from "./AddImage";
import AddVarient from "./AddVarient";



const AdminProduct = () => {
  const [activeTab, setActiveTab] = useState("product");

  const renderComponent = () => {
    switch (activeTab) {
      case "product":
        return <AddProduct />;
      case "image":
        return <AddImage />;
      case "variant":
        return <AddVarient />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      {/* Tabs */}
      <div className="flex gap-2 border-b mb-4">
        <button
          onClick={() => setActiveTab("product")}
          className={`px-4 py-2 rounded-t ${
            activeTab === "product"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Add Product
        </button>

        <button
          onClick={() => setActiveTab("image")}
          className={`px-4 py-2 rounded-t ${
            activeTab === "image"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Add Image
        </button>

        <button
          onClick={() => setActiveTab("variant")}
          className={`px-4 py-2 rounded-t ${
            activeTab === "variant"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Add Variant
        </button>
      </div>

      {/* Content */}
      <div className="bg-white shadow rounded">
        {renderComponent()}
      </div>
    </div>
  );
};

export default AdminProduct;