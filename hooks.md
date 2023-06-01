1. useRef:
The `useRef` hook allows you to create a mutable reference that persists across re-renders of a component. It returns a mutable ref object that has a `current` property. The `current` property can be assigned any value, and it will persist between component re-renders.

Example usage:
```javascript
import React, { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
```

In the example above, `useRef` is used to create a ref called `inputRef`. This ref is assigned to the `ref` prop of the `<input>` element. The `current` property of `inputRef` is then accessed in the `handleClick` function to focus the input element when the button is clicked.

2. useCallback:
The `useCallback` hook allows you to memoize a function, preventing unnecessary re-creation of that function on each render. It returns a memoized version of the callback function that only changes if one of the dependencies has changed.

Example usage:
```javascript
import React, { useState, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```

In the example above, the `handleClick` function is memoized using `useCallback`. The `count` state variable is added as a dependency in the dependency array. This ensures that the `handleClick` function is only recreated if the `count` value changes. This can be useful when passing callbacks to child components, as it avoids unnecessary re-renders.

3. useEffect:
The `useEffect` hook allows you to perform side effects in function components. It runs the effect function after the component has rendered. You can specify dependencies that determine when the effect should run again.

Example usage:
```javascript
import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    fetchData()
      .then((response) => setData(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {data ? <p>Data: {data}</p> : <p>Loading...</p>}
    </div>
  );
}
```

In the example above, `useEffect` is used to fetch data from an API and update the `data` state variable. The effect function is only run once, thanks to the empty dependency array `[]`. If you provide a non-empty dependency array, the effect will run whenever any of the dependencies change.

I hope this explanation helps you understand the working of `useRef`, `useCallback`, and `useEffect` hooks in React!