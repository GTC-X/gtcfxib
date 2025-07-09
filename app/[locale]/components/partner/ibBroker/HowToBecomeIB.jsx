import Image from "next/image";

const HowToBecomeIB = ({ title, subtitle, steps, gridCols = 'lg:grid-cols-4', bgColor = 'bg-gray-200' }) => {
  return (
    <section className={`${bgColor}`}>
        <div className='container'>
        <div className="text-center">
      <h2 className='HeadingH2 2xl:text-4xl w-72 md:w-full font-semibold text-center capitalize'>{title}</h2>
      <p className="text">{subtitle}</p>
      </div>
           
            <div className={`grid ${gridCols} md:grid-cols-2 grid-cols-1 pt-8 gap-4 md:gap-8`}>
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col justify-center items-center gap-2 bg-[#fff] border border-gray-300 px-4 py-8 hover:bg-white hover:cursor-pointer transition-all hover:-translate-y-2 hover:duration-500">
                        <Image width={100} height={100} src={step.imgSrc} alt="image step" className="md:w-fit w-[10%] pb-6"/>
                        <h3 className="text text-xl mb-0">{step.text}</h3>
                        <p className="text">{step.des}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default HowToBecomeIB;
