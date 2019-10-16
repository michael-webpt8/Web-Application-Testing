import React from 'react';

function Dashboard(props) {
  return (
    <div>
      <button type='button' onClick={props.strikes}>
        Strike
      </button>
      <button onClick={props.balls}>Ball</button>
      <button onClick={props.fouls}>Foul</button>
      <button onClick={props.hits}>Hit</button>
    </div>
  );
}
export default Dashboard;
