import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slices/counter.js'

function Counter () {
  // store.getState() -- получить состояние
  // store.subscribe --- получить информацию об изменениях
  // store.dispatch --- указать что произшло

  const useMySelector = (cb) => {
    const store = {} // context
    store.subscribe(cb) // cb(state)
  }
  const counter = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  const handlerIncrement = () => {
    dispatch(increment(10))
  }
  const handlerDecrement = () => {
    dispatch(decrement(10))
  }
  return (
    <div>
      <p>{ counter }</p>
      <button onClick={handlerIncrement}>+</button>
      <button onClick={handlerDecrement}>-</button>
    </div>
  );
}

export default Counter
