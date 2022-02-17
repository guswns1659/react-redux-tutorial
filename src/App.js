import './App.css';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';

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
