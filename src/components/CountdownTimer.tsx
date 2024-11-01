import '../styles/styles.css';

import React from 'react';
import Image from 'next/image';

interface CountdownTimerProps {
  minutes: number;
  seconds: number;
  option: 'mobile' | 'desktop';
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  minutes,
  seconds,
  option,
}) => {
  const containerClasses = option === 'mobile' 
    ? 'flex justify-center items-center gap-2.5 mb-[60px] lg:hidden bg-custom-dark rounded-[10px] p-2.5' 
    : 'realtive top-0 left-0 right-0 pt-5 pb-3 text-center rounded-t-2xl bg-custom-dark hidden lg:flex justify-center';

  const textClasses = option === 'mobile' 
    ? 'text-secondary-small' 
    : 'text-secondary-large p-0';

  return (
    <div className={`${containerClasses}`}>
      <div className='flex items-center justify-center gap-2.5'>
        <Image src={'/icons/timer-icon.svg'} alt='timer' width={24} height={24} />
        <span className={`text-custom-orange ${textClasses}`}>
          SALE ENDS IN
        </span>
        <div className={`text-custom-orange ${textClasses} w-10`}>
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
