
//? working for useRef hook in react

import { useState, useRef, ChangeEvent } from 'react';

function Timer(): JSX.Element {
  const [randomInput, setRandomInput] = useState<string>('');
  const [seconds, setSeconds] = useState<number>(0);

  const renders = useRef<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerId = useRef<number | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setRandomInput(e.target.value);
    renders.current++;
  };

  const startTimer = (): void => {
    timerId.current = window.setInterval(() => {
      renders.current++;
      setSeconds(prev => prev + 1);
    }, 1000);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const stopTimer = (): void => {
    if (timerId.current) {
      window.clearInterval(timerId.current);
      timerId.current = null;
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const resetTimer = (): void => {
    stopTimer();
    if (seconds) {
      renders.current++;
      setSeconds(0);
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <main className="App">
      <input
        ref={inputRef}
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={handleChange}
      />
      <p>Renders: {renders.current}</p>
      <br /><br />
      <section>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </section>
      <br /><br />
      <p>Seconds: {seconds}</p>
      <br /><br />
      <p>{randomInput}</p>
    </main>
  );
}

export default Timer;
