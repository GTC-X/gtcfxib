import { useTranslations } from "next-intl";
import Image from "next/image";
const Hero = () => {

  const t = useTranslations("prime-tech");
  return (
    <section className="pt-0">
      <div className="container">
        <div className="inner-contnet  border-b border-gray-200 pb-12">
            <div className="relative h-56 md:h-72 w-full">
                <Image src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/autochar-new.webp" fill alt="Auto chartist" className="object-contain" />
            </div>
            <div className="relative h-12 w-full ">
            <Image src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/autochartist.webp" fill alt="Auto chartist" className="object-contain" />
            </div>
            <p className='text pt-5'>
      {t("technicalTool.autoCharlist.banner")}
      </p>
        </div>
       
      </div>
      
     
</section>
  )
}
export default Hero