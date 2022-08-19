import { createSlice } from '@reduxjs/toolkit';

const categories = createSlice({
  name: 'category',
  initialState: { category: '' },
  reducers: {
    checkStatus(state) {
      // eslint-disable-next-line no-param-reassign
      state.category = 'Under construction';
    },
  },
});

export const categoriesActions = categories.actions;

export default categories;
