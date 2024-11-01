'use client';

import '../styles/styles.css';

import React, { useEffect, useState } from 'react';
import Feature from '@/components/Feature';
import plans from '@/data/plans';
import features from '@/data/features';
import PlanCard from '@/components/PlanCard';
import CountdownTimer from '@/components/CountdownTimer';

const PricingPage = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  useEffect(() => {
    const target = new Date(Date.now() + 24 * 60 * 1000 + 30 * 1000);

    const interval = setInterval(() => {
      const now = new Date;
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        setMinutes(0);
        setSeconds(0);
        clearInterval(interval);
        return;
      }

      const minute = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
      setMinutes(minute);

      const second = Math.floor(difference % (1000 * 60) / 1000);
      setSeconds(second);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handlePlanSelect = (id: string) => {
    setSelectedPlanId(id);
  };

  const handleGetStartedClick = () => {
    if (selectedPlanId !== null) {
      const selectedPlan = plans.find(plan => plan.id === selectedPlanId);
      if (selectedPlan) {
        console.log(`Selected Plan ID: ${selectedPlan.id}, Name: ${selectedPlan.name}`);
      }
    } else {
      console.log("No plan selected.");
    }
  };

  return (
    <div className='w-full min-h-screen p-3 bg-gradient-pattern overflow-hidden'>
      <h1 className='headline-medium lg:headline-large text-center mb-4 text-title-color'>
        Choose Your Plan:
      </h1>

      <div className='marquee-container'>
        <div className='flex justify-center gap-6 mb-10 lg:mb-[60px]'>
          {features.map((feature, index) => (
            <Feature key={index} icon={feature.icon} name={feature.name}/>
          ))}
        </div>
      </div>

      <div className='lg:hidden mb-[60px]'>
        <CountdownTimer 
          minutes={minutes} 
          seconds={seconds} 
          option='mobile'
        />
      </div>

      <div 
        className='
          grid grid-cols-1 gap-6 mb-6 md:mb-4 justify-center
          lg:grid-cols-[repeat(3,minmax(0,363px))]
          lg:[&>*:nth-child(1)]:order-3
          lg:[&>*:nth-child(2)]:order-1
        '
      >
        {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              id={plan.id}
              title={plan.title}
              tag={plan.tag}
              price={plan.price}
              originalPrice={plan.originalPrice}
              regularity={plan.regularity}
              isSelected={selectedPlanId === plan.id}
              onSelect={handlePlanSelect}
              minutes={minutes}
              seconds={seconds}
            />
          ))}
      </div>

      <div className='text-center'>
        <button
          onClick={handleGetStartedClick}
          className='
            text-primary-medium lg:text-secondary-large 
            text-white rounded-full 
            button-gradient button-gradient:hover
          '
        >
          Get Started
        </button>
        
        <p className='mt-6 text-sm text-custom-gray'>
          Automatic renewal of $29.99 per month.
          <br />
          You may cancel by{' '}
          <a 
            href='mailto:support@justdono.ai'
            className='text-custom-gray underline'
          >
            support@justdono.ai
          </a>
          . Our goal is customer satisfaction
        </p>
      </div>
    </div>
  );
};

export default PricingPage;
