import { useState } from 'react'
import './counter.css'

const CounterApp = () => {

  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  })

  const counterAdd = () => {
    setState({
      ...state,
      counter1: counter1 + 1
    })
  }

  const {counter1, counter2} = state

  return (
    <div>
      <h1>Counter1 {counter1}</h1>
      <h1>Counter2 {counter2}</h1>
      <hr />
      <button
        className='btn btn-primary'
        onClick={counterAdd}
      >
        +1
      </button>
    </div>
  )
}

export default CounterApp
