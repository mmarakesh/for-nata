import { useState } from 'react';
import './App.css';

function App() {

  const [ name, setName ] = useState("Nata");
  const updateName = () => {
    setName("Marina");
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello {name}!!!</p>
        <button className='btn' onClick={() => updateName()}>Please change the name after clicking!</button>
      </header>
    </div>
  );
}

export default App;
