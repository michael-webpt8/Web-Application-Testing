import React, { useState } from 'react';
import Strikes from './components/dashboard/Strikes';
import './App.css';

function App() {
  const [strikes, setStrikes] = useState(0);
  return (
    <div className='App'>
      <h1>Baseball</h1>
    </div>
  );
}

export default App;
