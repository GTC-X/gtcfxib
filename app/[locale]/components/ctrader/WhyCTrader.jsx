import React from 'react';

const WhyCTrader = ({ title, boxContents, boxStyle, numberStyle, iconSize, numColumns  }) => {
  return (
    <section className='bg-primary md:py-16 3xl:py-28 py-8'>
      <div className='container'>
        <h2 className='text-white HeadingH2 mb-10'>{title}</h2>
        <div className={`grid grid-cols-1 md:grid-cols-${numColumns} gap-8`}>
          {boxContents.map((box, index) => (
            <div
              key={index}
              className={`box-setting border border-secondary border-opacity-35 bg-secondary bg-opacity-15 hover:bg-primary cursor-pointer p-4 ${boxStyle}`}
            >
              <div className="flex flex-row items-center justify-between border-b border-gray-300 pb-5 mb-5">
                <div className="flex flex-row items-center justify-start gap-4">
                  <p className={`text-secondary text-3xl ${iconSize}`}>{box.icon}</p>
                  <h3 className="text-xl md:text-lg 2xl:text-xl text-white">
                    {box.title}
                  </h3>
                </div>
                <h2 className={`text-4xl text-secondary ${numberStyle}`}>{box.number}</h2>
              </div>
              <p className="text ltr:text-left rtl:text-right text-white">{box.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyCTrader;
