import React from 'react'
import Image from 'next/image';

const AssestDemo = ({ assetData, title, des, columns }) => {

    const gridClasses = {
        '2': 'md:grid-cols-2',
        '3': 'md:grid-cols-3',
        '4': 'md:grid-cols-4'
    };

        // Default to 3 columns if the passed columns value is not defined in gridClasses
    const columnClass = gridClasses[columns] || 'md:grid-cols-3';
  return (
    <section className="md:py-16 3xl:py-28 py-8">
            <div className="container">
                <h2 className="HeadingH2 text-center capitalize">
                    {title}
                </h2>
                <p class="text">{des}</p>
                <div className={`grid grid-cols-2 ${columnClass} gap-2 md:gap-4 md:mt-10`}>
                    {assetData.map((asset, index) => (
                        <div key={index} className="group flex flex-col justify-center gap-2 md:gap-8 items-center text-center p-2 md:p-8 cursor-pointer hover:opacity-60 transition-all ease-in duration-500 border border-gray-200 bg-gray-50 shadow-2xl">
                            <div className="relative h-8 md:h-16 w-full mb-2">
                                <Image src={asset.imageUrl} fill alt={asset.alt} className="object-contain" />
                            </div>
                            <div>
                                <h2 className="text-sm md:text-xl mb-3">{asset.name}</h2>
                                <p className="text-xs lg:text-base 2xl:text-[17px]">{asset.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
  )
}

export default AssestDemo