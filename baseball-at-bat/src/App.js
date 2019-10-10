import React, { useState } from 'react';

import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [foul, setFoul] = useState(0);
  const [hit, setHit] = useState(0);
  return (
    <div className='App'>
      <h1>Baseball</h1>
      <Display />
      <Dashboard />
    </div>
  );
}

export default App;
