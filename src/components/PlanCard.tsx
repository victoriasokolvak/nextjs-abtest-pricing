import '../styles/styles.css';

import React from 'react';
import Image from 'next/image';
import CountdownTimer from './CountdownTimer';

interface PlanCardProps {
  id: string;
  title: string;
  tag?: string;
  price: number;
  originalPrice?: number;
  regularity: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
  minutes: number;
  seconds: number;
  isTimerVisible: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({
  id,
  title,
  tag,
  price,
  originalPrice,
  regularity,
  isSelected,
  onSelect,
  minutes,
  seconds,
  isTimerVisible
}) => {
  return (
    <div
      onClick={() => onSelect(id)}
      className={`relative border-4 rounded-[20px] cursor-pointer bg-white shadow-sm w-full box-border, 
        ${isSelected 
          ? 'border-custom-green' 
          : 'border-unactive-border'}`
      }
    >
      {tag === 'Save 50%' && (
        <span
          className='
            absolute -top-8 right-8 
            px-6 py-[10px] 
            text-secondary-large
            text-center rounded-full 
            rotate-3 lg:rotate-6 
            bg-custom-yellow text-title-color
          '
        >
          🚀 Best value
        </span>
      )}
      
      {tag && (
        <span
          className='
            absolute -top-4 left-11
            px-[10px] py-1
            text-info text-center
            rounded-full
            bg-custom-green text-white
          '
        >
          {tag}
        </span>
      )}
      
      {isTimerVisible && (
        <div className='hidden lg:block'>
          <CountdownTimer 
            minutes={minutes} 
            seconds={seconds} 
            option='desktop' 
          />
          <div className='relative h-2'>
            <div className='absolute -top-3 right-7 bg-custom-dark w-4 h-4 rotate-45'></div>
          </div>
        </div>
      )}

      <div className={`flex items-start gap-3 ${isTimerVisible ? '' : 'lg:pt-4'}`}>
        <div
          className={`w-5 h-5 rounded-full border-2 mt-11 lg:mt-[26px] ml-3 flex items-center justify-center
            ${isSelected 
              ? 'border-custom-green bg-custom-green'
              : 'border-custom-check bg-transparent opacity-75'
            }
          `}
        >
          {isSelected && (
            <Image src={'/icons/check.svg'} alt='check' width={12} height={10} />
          )}
        </div>

        <div className='pt-11 pb-8 lg:pt-[26px]'>
          <h3 className='text-custom-check text-primary-small text-left'>
            {title}
          </h3>
        </div>

        <div className='flex flex-col items-end my-auto lg:mt-1 ml-auto pr-4 gap-0.5'>
          <span className='text-title-color text-info line-through-custom'>
            ${originalPrice?.toFixed(2)}
          </span>
          <span className='text-primary-large text-custom-blue'>
            ${price.toFixed(2)}
          </span>
          <span className='text-info text-title-color opacity-80'>
            {regularity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
