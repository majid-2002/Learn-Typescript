
import { ReactNode, Dispatch, SetStateAction } from "react"


type CounterProps = {
    setCount: Dispatch<SetStateAction<number>>
    children: ReactNode
}


const Counter = ({ ...props }: CounterProps) => {

    return (
        <div>
            <button>The count is {props.children}</button>
            <button onClick={() => { props.setCount((prev) => prev + 1) }}>+</button>
            <button onClick={() => { props.setCount((prev) => prev - 1) }}>-</button>
        </div>
    )
}

export default Counter