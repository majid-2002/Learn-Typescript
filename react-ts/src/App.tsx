import './App.css'
import CounterWithUseReducer from './components/HooksExamples/CounterWithUseReducer'
import { CounterProvider } from './components/Context/CounterContext'

function App() {
  return (
    <>
      <CounterProvider>
        <CounterWithUseReducer />
      </CounterProvider>
    </>
  )
}

export default App
