// src/store/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productName: "",
  description: "",
  category: "",
  location: "",
  availability: "",
  dailyPreference: "",
  weeklyPreference: "",
  monthlyPreference: "",
  generalMarketing: true,
  communities: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductName: (state, action) => {
      state.productName = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setAvailability: (state, action) => {
      state.availability = action.payload;
    },
    setDailyPreference: (state, action) => {
      state.dailyPreference = action.payload;
    },
    setWeeklyPreference: (state, action) => {
      state.weeklyPreference = action.payload;
    },
    setMonthlyPreference: (state, action) => {
      state.monthlyPreference = action.payload;
    },
    setGeneralMarketing: (state, action) => {
      state.generalMarketing = action.payload;
    },
    setCommunities: (state, action) => {
      state.communities = action.payload;
    },
  },
});

// Export actions
export const {
  setProductName,
  setDescription,
  setCategory,
  setLocation,
  setAvailability,
  setDailyPreference,
  setWeeklyPreference,
  setMonthlyPreference,
  setGeneralMarketing,
  setCommunities,
} = productSlice.actions;

// Export reducer
export default productSlice.reducer;
