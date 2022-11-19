
import React, { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";
import { increaseAsync, decreaseAsync } from "../modules/counter";

const CounterContainer = ({number, increaseAsync, decreaseAsync}) => {
    return (
        <Counter
            number={number}
            onIncrease={increaseAsync}
            onDecrease={decreaseAsync}
        />
    );
};

export default connect(
    (state) => ({
        number: state.counter,
    }),
    {
        increaseAsync,
        decreaseAsync,
    }
)(CounterContainer);