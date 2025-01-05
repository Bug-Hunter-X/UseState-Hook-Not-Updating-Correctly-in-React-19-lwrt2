import React from 'react';

function MyComponent() {
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  //Ensure re-render by adding a key to the button or using a different approach to trigger updates
  return (
    <div>
      <p>You clicked {count} times</p>
      <button key={count} onClick={incrementCount}>Click me</button>
    </div>
  );
}

export default MyComponent;