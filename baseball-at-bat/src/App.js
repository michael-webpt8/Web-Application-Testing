import React, { useState } from 'react';
import Strikes from './components/dashboard/Strikes';
import './App.css';
import Display from './components/display/Display';

function App() {
  const [strikes, setStrikes] = useState(0);
  return (
    <div className='App'>
      <h1>Baseball</h1>
      <Display />
    </div>
  );
}

export default App;
