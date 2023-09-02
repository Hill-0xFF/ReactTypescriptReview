/* eslint-disable react/jsx-one-expression-per-line */
const Content = () => {
  const handleNameChange = () => {
    const arrNames: string[] = ['Ada', 'Bob', 'Clark'];
    const index: number = Math.floor(Math.random() * arrNames.length);
    return arrNames[index];
  };

  const handleClick = (): void => {
    console.log('You clicked!');
  };

  const handleClick2 = (
    // evt: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    evt: React.MouseEvent<HTMLButtonElement>,
    name: string
  ): void => {
    console.log(`${name} clicked button <${evt.currentTarget.innerText}>!`);
  };

  const name: string = handleNameChange();
  return (
    <div>
      <main>Hello, {handleNameChange()}!</main>
      <p>
        <button onClick={handleClick}>Click</button>
      </p>
      <p>
        <button onClick={(evt) => handleClick2(evt, name)}>Click</button>
      </p>
    </div>
  );
};

export default Content;
