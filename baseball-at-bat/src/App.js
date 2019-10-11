import React, { useState } from 'react';

import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [foul, setFoul] = useState(0);
  const [hit, setHit] = useState(0);

  const strikes = () => {
    if (strike < 3) {
      setStrike(strike + 1);
    } else {
      setStrike(0);
    }
  };
  const balls = () => {
    if (ball < 4) {
      setBall(ball + 1);
    } else {
      setBall(0);
    }
  };
  const fouls = () => {
    if (strike < 2) {
      setStrike(strike + 1);
    }
  };
  const hits = () => {
    setHit(hit + 1);
    setStrike(0);
    setBall(0);
  };

  return (
    <div className='App'>
      <h1>Baseball</h1>
      <Display strike={strike} ball={ball} hit={hit} />
      <Dashboard strikes={strikes} balls={balls} fouls={fouls} hits={hits} />
    </div>
  );
}

export default App;
