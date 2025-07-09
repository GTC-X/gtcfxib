import Image from "next/image"


const PartnerWithGtc = ({ title, reasons, columns }) => {

  const gridClasses = {
    '2': 'md:grid-cols-2',
    '3': 'md:grid-cols-3',
    '4': 'md:grid-cols-4'
  };

  // Default to 3 columns if the passed columns value is not defined in gridClasses
  const columnClass = gridClasses[columns] || 'md:grid-cols-3';

  return (
    <section className="md:py-16 py-8 container">
      <div className="content-side">
        <div className="text-center">
          <h2 className="HeadingH2 bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-center">
            {title}
          </h2>
        </div>
        <div className="relative w-full h-[300px] md:h-[700px]">
          <Image src="/newIB1.webp" fill className="object-contain" alt="" />
        </div>
   
      </div>
    </section>
  )
}


export default PartnerWithGtc