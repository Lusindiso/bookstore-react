import { createSlice } from '@reduxjs/toolkit';

const categories = createSlice({
  name: 'category',
  initialState: { category: [] },
  reducers: {
    checkStatus() {
      return 'Under construction';
    },
  },
});

export const categoriesActions = categories.actions;

export default categories;
