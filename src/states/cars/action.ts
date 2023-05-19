import type { AnyAction, Dispatch } from '@reduxjs/toolkit'
import api from '../../utils/api'

const ActionType = {
    RECEIVE_CARS: 'RECEIVE_CARS'
}

const receiveCarsActionCreator = (cars: any[]): AnyAction => {
    return {
        type: ActionType.RECEIVE_CARS,
        payload: {
            cars
        }
    }
}

const asyncPopulateCars = (): any => {
    return async (dispatch: Dispatch) => {
        try {
            const cars = await api.getCars()
            dispatch(receiveCarsActionCreator(cars))
        } catch (error: any) {
            console.log(error.message)
        }
    }
}

export {
    ActionType,
    asyncPopulateCars
}
