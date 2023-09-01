import { useCallback, useState } from 'react';
import '../assets/App.css';
import Ref from './Ref';
import Timer from './Timer';

const  App = ()=> {
  const [count,setCount] = useState(0);
  const clickHandler = useCallback(()=>{
    setCount(count+1)
  },[count])
  return (
    <div className="App">
      <Ref clickHandler = {clickHandler}/>
      <Timer />
      <h2>{count}</h2>
      <button onClick={clickHandler}>Add</button>
    </div>
  );
}

export default App;
