const Counter = ({number, onIncrease, onDecrease}) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>increase</button>
      <button onClick={onDecrease}>decrease</button>
    </div>
  )
}

export default Counter;