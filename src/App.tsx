import React from 'react';
import { useState } from 'react'

//pushの練習
const App: React.FC<{}> = () => {

  const [count, setCount] = useState<number>(0);

  const handleUp = () => {
    setCount(count + 1)
  }


  return (
    <div className="App">
      <h1>App.tsx</h1>
      <h1>{count}</h1>< br />
      <button onClick={handleUp}>count up</button>


    </div>
  );
};

export default App;
