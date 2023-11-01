import React, { useEffect, useState } from 'react';

function MainPage() {
  const [underscore, setUnderscore] = useState('_');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setUnderscore((prev) => (prev === '_' ? ' ' : '_'));
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="mt-24">
      <img
        src="/logo/zereLogo.png"
        alt="Zerendor Logo"
        width={26}
        height={19}
      />
      <div className="mt-4">
        <p className="text-[#EDFFFF]">
          + Welcome to<span>{underscore}</span>
        </p>
      </div>
    </div>
  );
}

export default MainPage;
