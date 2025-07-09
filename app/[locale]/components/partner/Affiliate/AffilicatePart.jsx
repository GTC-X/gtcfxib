'use client'
import Image from "next/image";

const AffilicatePart = ({ title, reasons, columns }) => {
  const gridClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-4",
    4: "md:grid-cols-4",
  };

  // Default to 3 columns if the passed columns value is not defined in gridClasses
  const columnClass = gridClasses[columns] || "md:grid-cols-3";

  return (
    <section className="md:py-16 py-8 container">
      <div className="content-side">
          <div className="text-center">
            <h2 className="HeadingH2 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-center">
              {title}
            </h2>
          </div>

          <div className={`grid grid-cols-1 ${columnClass} gap-2 mt-8`}>
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex flex-row justify-between items-center rounded-lg border border-gray-300"
              >
                <span className="text-white md:text-3xl text-lg w-[20%] bg-gradient-to-r from-[#243586] from-10% via-[#222e73] via-30% to-[#141b43] to-90% p-5">
                  {reason.number}
                </span>
                <div className="border-l border-l-gray-300 w-[25%] p-4">
                  <Image
                    width={50}
                    height={60}
                    src={reason.imgSRC}
                    alt="image step"
                    className="md:w-fit w-8 md:h-fit h-8"
                  />
                </div>
                <p className="text-[16px] font-[500] w-[75%]">{reason.text}</p>
              </div>
            ))}
          </div>
          </div>
    </section>
  );
};

export default AffilicatePart