import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// state type
interface NextState {
  serviceData: Array<{ serviceName: string; price: number }>;
  allProducts: any[];
  userInfo: any | null;
}

//payload type for the addToCart action
interface AddToCartPayload {
  serviceName: string;
  price: number;
}

const initialState: NextState = {
  serviceData: [],
  allProducts: [],
  userInfo: null,
};

export const nextSlice = createSlice({
  name: "next",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      state.serviceData.push(action.payload);
    },
  },
});

export const { addToCart } = nextSlice.actions;
export default nextSlice.reducer;
