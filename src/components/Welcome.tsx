import React, { useEffect, useState } from 'react';

type Props = {
  to: string;
};

function ZerendorWelcome({ to }: Props) {
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

        <span className="uppercase text-[#EDFFFF] text-4xl rajdhani-regular">
          {to}
        </span>
      </div>
    </div>
  );
}

export default ZerendorWelcome;
