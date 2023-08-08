import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// state type
interface NextState {
  serviceData: Array<{ serviceName: string; price: number }>;
  allProducts: any[];
  userInfo: string | null;
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
    setServiceData: (state, action: PayloadAction<Array<{ serviceName: string; price: number }>>) => {
      state.serviceData = action.payload;
    },
    setUserEmail: (state, action: PayloadAction<string | null>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { addToCart, setUserEmail, setServiceData } = nextSlice.actions;
export default nextSlice.reducer;
