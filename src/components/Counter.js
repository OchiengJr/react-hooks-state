import React, { useState } from "react";

// Counter component definition
function Counter() {
  // Use destructuring to get count and setCount from useState
  const [count, setCount] = useState(0);

  // Increment function using functional update form
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Render a button with onClick event to call the increment function
  return (
    <button onClick={increment} className="counter-button">
      {`I have been clicked ${count} times`}
    </button>
  );
}

// Export the Counter component
export default Counter;
