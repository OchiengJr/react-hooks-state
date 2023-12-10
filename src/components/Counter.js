import React, { useState } from "react";

// Counter component definition
function Counter() {
  // Use destructuring to get count and setCount from useState
  const [count, setCount] = useState(0);

  // Combine both increment functions into a single function
  function increment() {
    // Use the functional update form to ensure correct state updates
    setCount((prevCount) => prevCount + 1);
  }

  // Return a button with an onClick event that calls the increment function
  return (
    <button onClick={increment}>
      I have been clicked {count} times
    </button>
  );
}

// Export the Counter component
export default Counter;
