import React from 'react';

const Display = props => {
  return (
    <>
      <h3>Display board</h3>
      <div className='display-board'>
        <div>
          <h3>Strike</h3>
          <p>0</p>
        </div>
        <div>
          <h3>Ball</h3>
          <p>0</p>
        </div>
        <div>
          <h3>Hit</h3>
          <p>0</p>
        </div>
      </div>
    </>
  );
};
export default Display;
