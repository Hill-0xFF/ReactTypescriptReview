/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect, useState } from 'react';

const Content = () => {
  const [name, setName] = useState<string | 'user'>();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    handleNameChange();
  }, []);
  const handleNameChange = () => {
    const arrNames: string[] = ['Ada', 'Bob', 'Clark'];
    const index: number = Math.floor(Math.random() * arrNames.length);
    setName(arrNames[index]);
  };

  const handleClick2 = (
    evt: React.MouseEvent<HTMLButtonElement>,
    name: string | undefined
  ): void => {
    setCount(count + 1);
    console.log(
      `${name} clicked button <${evt.currentTarget.innerText}>!\nCount: ${count}`
    );
  };

  return (
    <div>
      <main>Hello, {name}!</main>
      <p>
        <button onClick={handleNameChange}>Change Name</button>
      </p>
      <p>
        <button onClick={(evt) => handleClick2(evt, name)}>Click</button>
      </p>
    </div>
  );
};

export default Content;
