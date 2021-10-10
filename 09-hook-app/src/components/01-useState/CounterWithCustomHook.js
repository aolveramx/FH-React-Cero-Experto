import useCounter from '../../hooks/useCounter'

import './counter.css'

const CounterWithCustomHook = () => {

  const {state, increment, reset, decrement} = useCounter(100) // si esta vacio 10 por defecto 

  return (
    <>
      <h1>Counter with Hook: {state}</h1>
      <hr />

      <button onClick={() => increment(2)} className='btn'>+1</button>
      <button onClick={reset} className='btn'>Reset</button>
      <button onClick={() => decrement(2)} className='btn'>-1</button>
    </>
  )

}

export default CounterWithCustomHook
