import { IAction, actionTypes } from "../Actions";

export const counterReducer = (state: number , action: IAction): number => {
    switch (action.type) {
        case actionTypes.incrementCount:
            return state + action.payload
        case actionTypes.decrementCount:
            return state - action.payload
    }

    return state;
} 