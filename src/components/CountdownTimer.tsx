'use client';

import '../styles/styles.css';

import React from 'react';
import Image from 'next/image';

interface CountdownTimerProps {
  minutes: number;
  seconds: number;
  option: 'mobile' | 'desktop';
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  minutes,
  seconds,
  option,
  className = ''
}) => {
  const styles = {
    mobile: {
      container: "flex justify-center items-center gap-2.5 margin-bottom-60 lg:hidden bg-custom-dark rounded-10 p-2.5",
      text: "timer-text-mobile",
    },
    desktop: {
      container: "realtive top-0 left-0 right-0 pt-5 pb-3 text-center rounded-t-2xl bg-custom-dark hidden lg:flex justify-center",
      text: "button-text-desktop p-0",
    }
  };

  const selectedStyle = styles[option];

  return (
    <div className={`${selectedStyle.container} ${className}`}>
      <div className="flex items-center justify-center gap-2.5">
        <Image src={'/icons/timer-icon.svg'} alt='timer' width={24} height={24} />
        <span className={`text-custom-orange ${selectedStyle.text}`}>
          SALE ENDS IN
        </span>
        <div className={`text-custom-orange ${selectedStyle.text} w-10`}>
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;