import './App.css'
import Counter from './components/Counter'
import { Heading } from './components/Heading'
import { Section } from './components/Section'
import { useState } from "react";
import { List } from './components/List';

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <Heading title={"Hello world"} />
      <Section title='Sample'>
        This is my section.
      </Section>
      <Counter setCount={setCount}>
        {count}
      </Counter>
      <List items={["Tacos", "coffee", "code"]} render={(item) => <p>{item}</p>} />
    </>
  )
}

export default App
