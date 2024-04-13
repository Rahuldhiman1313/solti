import React, { useState } from 'react';

const Copylink = () => {
  const [isActive, setIsActive] = useState(false);

  const handleCopy = () => {
    const input = document.querySelector('.text');
    input.select();
    document.execCommand('copy');
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 2500);
  };

  return (
    <div className={`copy-text ${isActive ? 'active' : ''}`}>
      <input type="text" className="text" value="9NfCQfEDnmhyeHagFAsZatnsjfsUwbQCRUz159Cesb68" />
      <button onClick={handleCopy}>Copy</button>
    </div>
  );
};

export default Copylink;