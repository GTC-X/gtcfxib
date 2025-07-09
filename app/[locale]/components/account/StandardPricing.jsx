import Link from 'next/link';
import React from 'react';
import MTAccountLink from '../common/MTAccountLink';


const PricingDetail = ({ title, value }) => (
  <div className='detail py-3'>
    <h5 className='text-base font-bold text-primary'>{title}</h5>
    <p className='text-base text-primary font-light'>{value}</p>
  </div>
);

const StandardPricing = ({ accountType, description, details, Icon  }) => {
  return (
    
      <div className='standard-table'>
        <div className='standard-header bg-gradient rounded-tl-2xl rounded-tr-2xl shadow-4xl p-4 flex gap-8 justify-between items-center'>
          <div className='content-align'>
            <h3 className='text-secondary text-xl font-semibold leading-10'>{accountType}</h3>
            <p className='text-white font-normal'>{description}</p>
          </div>
          <p className='text-secondary'>
          {Icon}
          </p>
        </div>
        <div className='account-body p-4 shadow-2xl bg-white rounded-bl-2xl rounded-br-2xl'>
          {details.map((detail, index) => (
            <PricingDetail key={index} title={detail.title} value={detail.value} />
          ))}
          <MTAccountLink />
        </div>
      </div>
    
  );
};

export default StandardPricing;
