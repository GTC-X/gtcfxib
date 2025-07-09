'use client';
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const WhyMT4 = ({cardsData}) => {
    const t = useTranslations("platform.mt4PlatformPage.whymt4");
    const path = usePathname();
    const isMs = path.includes('/ms');
    return (
        <section className='container py-12'>
            <h2 className='text-primary text-[24px] md:text-[30px] font-[600] text-center'>{t("heading")}</h2>
            <div className=' flex flex-wrap justify-center items-center gap-12 pt-8'>
                {cardsData?.map((item,index) => (
                    <div key={index} className={`flip-card border-primary h-72 w-80 cursor-pointer ${isMs ? 'h-80':'h-72'}`}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front bg-secondary border rounded-[25px] p-6">
                                <div className="text-primary flex flex-col h-full justify-center items-center">
                                    {item.icon}
                                    <h1 className="text-primary font-semibold text-xl my-4">{item.title}</h1>
                                    <div className="h-[2px] w-4/12 bg-secondary mt-5"></div>
                                </div>
                            </div>
                            <div className="flip-card-back p-4 bg-gradient-to-b from-[#1e446d] via-[#1e446d] to-[#1e446d] rounded-[25px]">
                                 <h1 className="text-secondary font-semibold mb-2">{item.title}</h1>
                                <h1 className="text-white flex flex-col justify-center items-center text-base">
                                    {item.paragraph}
                                </h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhyMT4;