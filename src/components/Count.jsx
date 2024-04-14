import React, { useState, useEffect } from 'react';

function Count() {
  const initialCount = 2100000; // Initial count value
  const incrementValue = 300; // Increment value
  const intervalDuration = 2000; // Duration between increments in milliseconds

  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('count');
    return storedCount ? parseInt(storedCount, 10) : initialCount;
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => {
        const newCount = prevCount + incrementValue;
        localStorage.setItem('count', newCount.toString()); // Update count in localStorage
        return newCount;
      });
    }, intervalDuration);
    
    return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
  }, []);

  return (
    <div>
        <span>{count}</span>
    </div>
  )
}

export default Count

