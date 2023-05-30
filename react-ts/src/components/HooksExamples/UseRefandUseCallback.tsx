import { useState, useRef, useCallback } from 'react'

function UseRefandUseCallback() {
    const [count, setCount] = useState(0) 
    const inputRef = useRef<HTMLInputElement>(null) //? useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
    const addTwo = useCallback(() => setCount(prev => prev + 1), []) //? useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.

    return (
        <>
            <h1>{count}</h1>
            <button onClick={addTwo}>Add Two</button>
            <input ref={inputRef} type="text" />
        </>
    )
}

export default UseRefandUseCallback;
