import { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

function CounterWithUseReducer() {

    const { state, dispatch } = useContext(CounterContext);

    return (
        <div >
            <h2>Counter with useReducer</h2>
            <input
                type="text"
                value={state.userInput}
                onChange={(e) => {
                    dispatch({ type: "newUserInput", payload: e.target.value });
                }}
                autoComplete="off"
                placeholder="Type something.."
            ></input>
            <p style={{ color: state.color ? "#fff" : "#fff952" }}>The count is {state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "tgColor" })}>Color</button>
            <p style={{ color: state.color ? "#fff" : "#fff952" }}>{state.userInput}</p>
        </div>
    );
}

export default CounterWithUseReducer;