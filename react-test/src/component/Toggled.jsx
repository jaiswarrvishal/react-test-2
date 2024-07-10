import React, { useState } from 'react';

const Toggled = () => {
  // Define a state variable `isToggled` with initial value `false`
  const [isToggled, setIsToggled] = useState(false);

  // Function to toggle the state
  const toggleState = () => {
    setIsToggled(prevState => !prevState);
  };

  return (
    <div>
      <h1>Toggle State Example</h1>
      <button onClick={toggleState}>
        {isToggled ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default Toggled;
