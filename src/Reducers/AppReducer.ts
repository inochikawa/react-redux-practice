import { IAction } from "../Actions";
import { IAppState } from "../States";
import { counterReducer } from "./CounterReducer";

const initialState: IAppState = {
    count: 0
}

export const appReducer = (state: IAppState = initialState, action: IAction): IAppState => ({
    count: counterReducer(state.count, action)
})