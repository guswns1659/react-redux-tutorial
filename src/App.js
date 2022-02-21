import './App.css';
import CounterContainer from './containers/CounterContainer';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <CounterContainer></CounterContainer>
      <hr />
      <Todos></Todos>
    </div>
  );
}

export default App;
