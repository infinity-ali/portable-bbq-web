import { ArrowLeft } from "lucide-react";
import React from "react";
import InputField from "../../../../components/InputField";

const MonthlyPreference = () => {
  const handleSave = (data) => {
    console.log("Input data saved:", data);
    // Handle the saved data (e.g., send to an API, store in state, etc.)
  };
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4 text-gray-800 lg:px-8">
      {/* Header */}
      <header className="flex items-center space-x-2 text-purple-700">
        <a href="/" className="p-1">
          <ArrowLeft size={20} />
        </a>
        <h1 className="text-lg font-semibold lg:text-2xl">
          Edit Price Preference
        </h1>
      </header>
      <div>
        <InputField label="Price Preference" onSave={handleSave} />
      </div>
    </div>
  );
};

export default MonthlyPreference;
