import { createContext } from "react";
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


const useCounterContext = () => {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        userInput: "",
        color: false,
    });

    return { state, dispatch }
}

type UseCounterContextType = ReturnType<typeof useCounterContext>


export const CounterContext = createContext<UseCounterContextType>(
    {
        state: {
            count: 0,
            userInput: "",
            color: false,
        },
        dispatch: () => undefined
    }
);

export const CounterProvider = ({ children }: { children: React.ReactNode }) => {
    const { state, dispatch } = useCounterContext();
    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
}
