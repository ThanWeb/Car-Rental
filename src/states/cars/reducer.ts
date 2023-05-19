import type { AnyAction } from '@reduxjs/toolkit'
import { ActionType } from './action'

const carsReducer = (cars = [], action: AnyAction = { type: '' }): any => {
    switch (action.type) {
    case ActionType.RECEIVE_CARS:
        return action.payload.cars
    default:
        return cars
    }
}

export default carsReducer
