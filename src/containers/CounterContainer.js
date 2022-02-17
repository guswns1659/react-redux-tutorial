import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';
import { connect } from 'react-redux';

const CounterContainer = ({number, increase, decrease}) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease}></Counter>
  )
}

export default connect(
  state => ({
    number: state.counter.number
  }),
  disPatch => ({
    increase: () => disPatch(increase()),
    decrease: () => disPatch(decrease())
  }),
)(CounterContainer)
