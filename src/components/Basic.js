import React, { useState } from 'react';

const Basic = () => {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <p>
        <button onClick={handleClick}>클릭</button>
      </p>
      <p>{isClicked && '클릭됨'}</p>
    </div>
  );
};

export default Basic;
