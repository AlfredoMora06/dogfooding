import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FoodCheckState {
  query: string;
  status: 'idle' | 'loading' | 'success' | 'error';
  result: string | null;
}

const initialState: FoodCheckState = {
  query: '',
  status: 'idle',
  result: null,
};

const foodCheckSlice = createSlice({
  name: 'foodCheck',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setStatus(state, action: PayloadAction<'idle' | 'loading' | 'success' | 'error'>) {
      state.status = action.payload;
    },
    setResult(state, action: PayloadAction<string | null>) {
      state.result = action.payload;
    },
  },
});

export const { setQuery, setStatus, setResult } = foodCheckSlice.actions;
export default foodCheckSlice.reducer;