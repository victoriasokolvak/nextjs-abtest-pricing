import '../styles/styles.css';

import React from 'react';
import Image from 'next/image';

interface FeatureProps {
  icon: string;
  name: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, name }) => {
  return (
    <div className='flex flex-col items-center gap-2 h-[84px] py-4'>
      <Image src={icon} alt={name} width={20} height={20} className='mt-4'/>
      <span className='mb-4 text-secondary-large p-0 text-custom-check text-left'>
        {name}
      </span>
    </div>
  );
};

export default Feature;
