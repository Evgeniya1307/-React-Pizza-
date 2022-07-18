import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"





export const fetchPizzas = createAsyncThunk(
    "pizza/fetchPizzasStatus",
    // прикручиваем логику редакса через thunkApi
    async (params) => {
      const { sortBy, order, category, search, currentPage } = params;
      const { data } = await axios.get(
        `https://62b41f5aa36f3a973d2c669d.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      );



      return data;
    }
  );

 

const initialState={
items:[],
status:'loading',
};


const pizzaSlice = createSlice({
name: 'pizza',
initialState,

reducers: {
setItems(state,action) {
    state.items = action.payload;
},
},

extraReducers: {
    [fetchPizzas.pending]: (state) => { // ожидание
    state.status = "loading";
    state.items = []; //перед отправкой очистка в момент загрузки
    },

    [fetchPizzas.fulfilled]: (state, action) => { // успешно
        state.items = action.payload;
        state.status = "success";
      },

      [fetchPizzas.rejected]: (state, action) => { // произошла ошибка
state.status ="error";
state.items=[]; // чтобы невернулись старые пиццы
    },
},
      });
    





export const{setItems}=pizzaSlice.actions; // вытаскиваю
export default pizzaSlice.reducer;

