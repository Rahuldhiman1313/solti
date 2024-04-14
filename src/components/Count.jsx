import React, { useState, useEffect } from 'react';

function Count() {
  const initialCount = 2100000; // Initial count value
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('count');
    return storedCount ? parseInt(storedCount, 10) : initialCount;
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => {
        const newCount = prevCount + 1;
        localStorage.setItem('count', newCount.toString()); // Update count in localStorage
        return newCount;
      });
    }, 5000); // Increase count every second (1000 milliseconds)
    
    return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
        <span>{count}</span>
    </div>
  )
}

export default Count

