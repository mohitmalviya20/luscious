import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'basket',
  initialState: {
    basket:[]
  },
  reducers: {
    SetBasket:(state, action)=>{
        state.basket = [...state.basket,action.payload]


    },
    emptyBasket:(state)=>{
      state.basket = []
    },
    removeFromBasket:(state, action)=>{
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      if (index >= 0) {
        state.basket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as its not in basket!`
        );
        }
    }
    }
    
 
});

export const { SetBasket,emptyBasket,removeFromBasket} =appSlice.actions;
export const selectBasked = (state)=>state.basket.basket;
export default appSlice.reducer;
