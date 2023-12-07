import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import  { decrement, increment, incrementByAmount, resetState } from '../redux/counter';

const App = () => {
  const {count} = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Counter App</h1>
      <h2>The current count is: {count}</h2>
      <div className="buttonGroup">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        <button onClick={() => dispatch(resetState())}>Reset</button>
      </div>
    </div>
  )
}

export default App
