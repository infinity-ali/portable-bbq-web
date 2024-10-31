import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductEdit from "./app/pages/ProductEdit"; // Main product edit page
import Availability from "./app/pages/Availability"; // Availability component
import Category from "./app/pages/Category"; // Category component
import Description from "./app/pages/Description"; // Description component
import Location from "./app/pages/Location"; // Location component
import {
  DailyPreference,
  MonthlyPreference,
  WeeklyPreference,
} from "./app/pages/PricePreference"; // Price Preference component/
import ProductName from "./app/pages/ProductName.jsx"; // Product Name component
import Communities from "./app/pages/Communities"; // Communities component

function App() {
  return (
    <Router>
      <div className="App bg-gray-100">
        <Routes>
          <Route path="/" element={<ProductEdit />} />
          <Route path="/availability" element={<Availability />} />
          <Route path="/category" element={<Category />} />
          <Route path="/description" element={<Description />} />
          <Route path="/location" element={<Location />} />
          <Route path="/daily-preference" element={<DailyPreference />} />
          <Route path="/weekly-preference" element={<WeeklyPreference />} />
          <Route path="/monthly-preference" element={<MonthlyPreference />} />
          <Route path="/product-name" element={<ProductName />} />
          <Route path="/communities" element={<Communities />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
