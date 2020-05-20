import { IAction } from "./IAction";
import { actionTypes } from "./ActionNames";

export const incrementCountAction = (value: number): IAction => ({
    type: actionTypes.incrementCount,
    payload: value
})

export const decrementCountAction = (value: number): IAction => ({
    type: actionTypes.decrementCount,
    payload: value
})