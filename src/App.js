import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useRef } from 'react';

function App() {
  const [data, setData] = useState('');

  // get DOM element(useRef)
  const inputRef = useRef(null);
  const showDom = () => {
    console.log(inputRef.current.value);
  }
  return (
    <div className="App">
      <h1>React App</h1>
      <div>
        <input
          type = "text"
          value = {data}
          onChange = {(e) => setData(e.target.value)}
        />
      </div>

      <div>
        <input
          type = "text"
          ref = {inputRef}
        />
        <button onClick = {showDom}>get DOM</button>
      </div>
    </div>
  );
}

export default App;
