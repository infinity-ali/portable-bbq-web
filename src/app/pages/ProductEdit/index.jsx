/* eslint-disable react/prop-types */
import React from "react";
import FirstImage from "../../../assets/images/1.jpeg";
import SecondImage from "../../../assets/images/2.jpeg";
import ThirdImage from "../../../assets/images/3.jpeg";
import {
  ArrowLeft,
  Calendar,
  ChevronRight,
  FileBadge,
  ImageIcon,
  LocateIcon,
  Logs,
  Upload,
} from "lucide-react"; // Use any icon component library you prefer
import { useDispatch, useSelector } from "react-redux";
import { setGeneralMarketing } from "../../../store/product/productSlice";
import { useNavigate } from "react-router-dom";

const ProductEdit = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    productName,
    description,
    category,
    location,
    availability,
    dailyPreference,
    weeklyPreference,
    monthlyPreference,
    generalMarketing,
    communities,
  } = useSelector((state) => state.product);

  console.log("index page of product edit", {
    productName,
    description,
    category,
    location,
    availability,
    dailyPreference,
    weeklyPreference,
    monthlyPreference,
    generalMarketing,
    communities,
  });

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4 text-gray-800 lg:px-8">
      {/* Header */}
      <header className="flex items-center space-x-2 text-purple-700">
        <button className="p-1">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-semibold lg:text-2xl">
          Edit Portable Barbecue Grill
        </h1>
      </header>

      {/* Product Section */}
      <Section title="Product" icon={<Logs size={18} />}>
        <ListItem
          label="Product name"
          value={productName || "Enter Product Name"}
          route="/product-name"
          border="border-b border-b-gray-200"
        />
        <ListItem
          label="Description"
          value={description || "Enter Description"}
          route="/description"
          border="border-b border-b-gray-200"
        />
        <ListItem
          label="Category"
          value={category || "Select Category"}
          route="/category"
        />
      </Section>

      {/* Photos Section */}
      <Section
        title="Photos"
        actionText="Add new"
        icon={<ImageIcon size={18} />}
      >
        <div className="flex space-x-2 p-3 bg-white rounded-md overflow-x-auto lg:space-x-4 lg:p-4">
          <img
            src={FirstImage}
            alt="uploaded-images"
            className="w-16 h-14 rounded-md"
          />
          <img
            src={SecondImage}
            alt="uploaded-images"
            className="w-16 h-14 rounded-md"
          />
          <img
            src={ThirdImage}
            alt="uploaded-images"
            className="w-16 h-14 rounded-md"
          />
        </div>
      </Section>

      {/* Location Section */}
      <Section title="Location" icon={<LocateIcon size={18} />}>
        <ListItem
          label="Fillmore Street, Suite 1047, San Francisco"
          value={location || "Enter Location"}
          route="/location"
        />
      </Section>

      {/* Availability Section */}
      <Section
        title="Availability"
        actionText="Add new"
        icon={<Calendar size={18} />}
      >
        <ListItem
          label="Sat at Mon"
          value={availability || "Select Availability"}
          route="/availability"
        />
      </Section>

      {/* Price Preferences Section */}
      <Section title="Price Preferences" icon={<FileBadge size={18} />}>
        <ListItem
          label="Daily"
          value={dailyPreference || "Set Daily Preference"}
          route="/daily-preference"
          border="border-b border-b-gray-200"
        />
        <ListItem
          label="Weekly"
          value={weeklyPreference || "Set Weekly Preference"}
          route="/weekly-preference"
          border="border-b border-b-gray-200"
        />
        <ListItem
          label="Monthly"
          value={monthlyPreference || "Set Monthly Preference"}
          route="/monthly-preference"
        />
      </Section>

      {/* Sharing Preferences Section */}
      <Section title="Sharing Preferences" icon={<Upload size={18} />}>
        <Toggle
          value={generalMarketing}
          label="General Marketplace"
          border="border-b border-b-gray-200"
        />
        <ListItem
          label="Communities"
          value={communities || "Set Monthly Preference"}
          route="/communities"
        />
      </Section>
    </div>
  );
};

const Section = ({ title, children, actionText, icon }) => (
  <section className="space-y-2">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="opacity-50">{icon}</div>
        <h2 className="font-medium text-gray-600 text-sm lg:text-lg">
          {title}
        </h2>
      </div>
      {actionText && (
        <button className="text-purple-700 text-sm lg:text-base">
          {actionText}
        </button>
      )}
    </div>
    <div className="bg-white rounded-md">{children}</div>
  </section>
);

const ListItem = ({ label, value, border, route }) => {
  const navigate = useNavigate();
  return (
    <div className="px-4">
      <div
        className={`flex justify-between items-start py-3 text-sm lg:text-base ${border}`}
      >
        <span className="truncate">{label}</span>
        <button
          onClick={() => navigate(route)}
          className="flex flex-row items-center gap-2 cursor-pointer"
        >
          <span className="text-gray-500">{value}</span>
          <span className="opacity-50">
            <ChevronRight size={18} />
          </span>
        </button>
      </div>
    </div>
  );
};

const Toggle = ({ label, border, value }) => {
  const dispatch = useDispatch();
  return (
    <div className="px-4 bg-white rounded-md">
      <div
        className={`flex justify-between items-center py-3 text-sm lg:text-base ${border}`}
      >
        <span>{label}</span>
        <button
          onClick={() => dispatch(setGeneralMarketing(!value))}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out ${
            value ? "bg-[#9333EA]" : "bg-gray-200"
          }`}
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${
              value ? "translate-x-5" : "translate-x-1"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductEdit;
