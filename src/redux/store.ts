import { configureStore } from '@reduxjs/toolkit'
import filter from "./slices/filterSlice.js"
import cart from './slices/cartSlice.js'
import pizza from './slices/pizzaSlice.jsx'
import { useDispatch } from "react-redux";



export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza
  },
})

// главный state(получение типа всего хранилища) c помощью typeof говорим дай мне тип store
// если нужно из функции вытащить только её содержимое для этого есть - ReturnType- это спец тип он берёт содержимое  и превращает в ТИП
export type RootState = ReturnType<typeof store.getState>; // RootState я глобальный стейт в котором содержится типизация фильтрация корзины пиццы

 //превращаю js функцию в тип  и сохрани её в переменную
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();// тип для диспатча