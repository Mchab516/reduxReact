import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement , add} from './Redux/Reducer';

const App = () => {
   
  const dispatch = useDispatch()

  let nbr = 6

   const count = useSelector(state => state.CountRedux.count)

  return (
    
    <div className="App">
    
    <button onClick={() => dispatch(increment())}>+</button>
    <p>{count}</p>
    <button onClick={()=> dispatch(decrement())}>-</button>
    <button onClick={()=> dispatch(add(nbr))}>Add nbr</button>
    
    
  
    </div>
  );
}

export default App;