import Aos from "aos";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const WhyGtcfxBestPlatform = () => {
  const t = useTranslations("Instruments");
  const path= usePathname();
  const isAr = path.includes("/ar-AE");
  const isCh = path.includes("/zh-hans");
  const heading = t("stock.bestPlatformHeading")
    .replace(/\[c\]/g, "<span class='text-secondary'>")
    .replace(/\[\/c\]/g, "</span>");
  useEffect(() => {
    Aos.init();
  }, []);


  let imagePath;
  if (isAr) {
      imagePath = "/account/gtcfx-best.webp";
  } else if (isCh) {
      imagePath = "/account/finalll.webp"; // Assuming you have a zh-2.webp for Chinese
  } else {
      imagePath = "/account/gtcfx-best.webp"; // Default image
  }


  return (
    <div
      className="pt-10 mt-6 bg-[url('/bg-why-gtcfx.webp')] bg-no-repeat bg-center bg-[length:100%_120%]"
      style={{ backgroundImage: `` }}
    >
      <div className=" container">
        <div
          className="flex  justify-center items-center pb-6"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img
            src={"/arrows.webp"}
            alt={"title"}
            fill
            className="object-contain pr-2 w-16"
          />
          <h2
            className="font-extrabold text-3xl text-primary "
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        </div>
        <div className="relative h-60 lg:h-80 w-full">
          <Image
            src={imagePath}
            alt={"title"}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
export default WhyGtcfxBestPlatform;
