import React from 'react';


const PaymentOption = ({ title, subtitle, paymentMethods }) => {
  return (
    <div className="last-portion py-10 md:py-12 xl:py-16 2xl:py-20 3xl:py-24">
      <div className="container">
        {/* Top Content */}
        <div className="top-content mb-10">
          <h2 className="HeadingH2 capitalize">{title}</h2>
          <p className="text">{subtitle}</p>
        </div>

        {/* Payment Methods */}
        <div className="content-part">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 md:justify-center">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex flex-col justify-center items-center gap-4 border rounded-lg p-10 bg-gradient-to-t from-[#24358b] via-[#242c75] to-[#141b43] text-white">
                <div className="text-center text-6xl">{method.icon}</div>
                <h3 className="HeadingH2 text-2xl text-secondary mb-0">{method.title}</h3>
                <p className="text text-white">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOption;
