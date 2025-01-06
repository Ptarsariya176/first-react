import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setcount] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setcount(count + 1)}>value of count is  increment{count}</button>
      <br />
      <button onClick={()=> setcount(count-1)}> value of count is decryment  {count}</button>
    </div>
  );
}

export default App;
