import { ArrowLeft } from "lucide-react";
import React from "react";
import InputField from "../../../components/InputField";

import { useDispatch } from "react-redux";
import { setProductName } from "../../../store/product/productSlice";
import { useNavigate } from "react-router-dom";

const ProductName = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSave = (data) => {
    dispatch(setProductName(data));
    // Handle the saved data (e.g., send to an API, store in state, etc.)
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4 text-gray-800 lg:px-8">
      {/* Header */}
      <header className="flex items-center space-x-2 text-purple-700">
        <button onClick={() => navigate("/")} href="/" className="p-1">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-semibold lg:text-2xl">Edit Product Name</h1>
      </header>
      <div>
        <InputField label="Product Name" onSave={handleSave} />
      </div>
    </div>
  );
};

export default ProductName;
