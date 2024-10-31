// InputField.js
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const InputField = ({ label, onSave }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    onSave(inputValue); // Pass the input value back to the parent component
    setInputValue(""); // Clear the input after saving
  };

  return (
    <div className="flex flex-col space-y-2 mb-4">
      {label && (
        <label className="font-medium text-gray-600 text-sm lg:text-lg text-start">
          {label}
        </label>
      )}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={`Enter ${label}`}
      />
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-300"
      >
        Save
      </button>
    </div>
  );
};

export default InputField;
