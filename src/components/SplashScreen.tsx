import React from 'react';
import Image from 'next/image';

const SplashScreen = () => {
  return (
    <div className='splash'>
      <div className='overlay'></div>
      <div className='content'>
        <div className='logo my-4'>
          <Image
            src='/deals.png'
            alt='Share A Deal Logo'
            width={764}
            height={358}
            className='drop-shadow-2xl shadow-black'
          />
        </div>
        <p className='description'>
          Discover amazing deals & discounts tailored for developers.
        </p>
        <div className='featuredDeal'>
          <div className='featuredDealContent'>
            <h2 className='featuredDealTitle'>Deal of the Day</h2>
            <p className='featuredDealDescription'>
              Save 50% on JetBrains IDEs with our exclusive coupon!
            </p>
            <a href='/add' className='button'>
              Share A Deal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
