import { useReducer } from "react";

type State = {
    count: number;
    userInput: string;
    color: boolean;
};

type Action =
    | { type: "increment" }
    | { type: "decrement" }
    | { type: "tgColor" }
    | { type: "newUserInput"; payload: string };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };
        case "decrement":
            return { ...state, count: state.count - 1 };
        case "tgColor":
            return { ...state, color: !state.color };
        case "newUserInput":
            return { ...state, userInput: action.payload };
        default:
            throw new Error("Bad Action Type");
    }
};

function CounterWithUseReducer() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        userInput: "",
        color: false,
    });

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
            ></input>
            <p style={{ color: state.color ? "#fff" : "#fff952" }}>The count is {state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "tgColor" })}>Color</button>
            <p>{state.userInput}</p>
        </div>
    );
}

export default CounterWithUseReducer;