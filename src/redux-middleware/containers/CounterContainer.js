import Counter from '../components/Counter';
import { useSelector } from 'react-redux';

const CounterContainer = () => {
  const number = useSelector(({counter}) => counter.counter);


  return (
    <Counter
      number={number}
      onIncrease={}
      onDecrease={}
    ></Counter>
  )
}