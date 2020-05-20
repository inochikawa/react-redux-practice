import * as React from "react"
import { IAppState } from "../../States";
import { incrementCountAction, decrementCountAction, IAction } from "../../Actions";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface CounterProps {
  count: number;
  onIncrementClick: (value: number) => void;
  onDecrementClick: (value: number) => void;
}


class CounterComponent extends React.Component<CounterProps> {
  render() {
    return <div>
      <p>{this.props.count}</p>
      <div>
        <button onClick={() => this.props.onIncrementClick(1)}>+</button>
        <button onClick={() => this.props.onDecrementClick(1)}>-</button>
      </div>
    </div>
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    onIncrementClick: (value: number) => {
      dispatch(incrementCountAction(value))
    },
    onDecrementClick: (value: number) => {
      dispatch(decrementCountAction(value))
    }
  }
}

export const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterComponent)