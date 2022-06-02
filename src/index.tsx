import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import logo from "src/assets/cat.png"

console.log(logo);

const App = () => {
  const [count, setCount] = useState(1);
  const add = () => {
    setCount((v) => v + 1);
  };

  return (
    <div>
      <img src={logo} alt="cat" width={100} />
      <div>Hello React</div>
      <div>count:{count}</div>
      <button onClick={add}>add</button>
    </div>
  );
};

const root = createRoot(document.getElementById('root') as HTMLElement);
console.log('hello');

root.render(<App />);
