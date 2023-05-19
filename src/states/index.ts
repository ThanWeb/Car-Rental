import { configureStore } from '@reduxjs/toolkit'
import carsReducer from './cars/reducer'

const store = configureStore({
    reducer: {
        cars: carsReducer
    }
})

export default store
