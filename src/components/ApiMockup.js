import React, { useState } from 'react';

const ApiMockup = () => {
  const [value, setValue] = useState('');
  const [name, setName] = useState('');

  const handleClick = () => {
    fetch(`https://koreanjson.com/users/${value}`)
      .then((response) => response.json())
      .then((json) => setName(json.name))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <input value={value} onChange={({ target }) => setValue(target.value)} />
      <button onClick={handleClick}>클릭</button>
      <p>{name}</p>
    </div>
  );
};

export default ApiMockup;
