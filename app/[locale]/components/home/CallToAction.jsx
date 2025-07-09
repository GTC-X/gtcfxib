import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BackOfCard({ title, icon, benefits  }) {
  const t = useTranslations("home.accountType");
  const path= usePathname();
  const isAr=path.includes('/ar');
  return (
    <div className="flip-card  border-primary  h-72">
      <div className="flip-card-inner ">
        <div className="flip-card-front bg-white border rounded-none p-6 bg-cover bg-top bg-[url('https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/overlay-bg.webp')]">
          <div className="text-accent flex flex-col h-full justify-center items-center">
            <div className="relative w-full h-24">
                <Image src={icon} fill alt={title} className="object-contain" />
            </div>
   
            <h1 className="text-secondary text-base xl:text-lg 3xl:text-xl my-4 uppercase">{title}</h1>
            <p className="underline text-sm md:text-base">{t("view_more")}</p>
          </div>
        </div>
        <div className="flip-card-back p-6 bg-secondary text-left">
        <h3 className="text-white flex flex-col justify-start items-start text-base uppercase mb-3">
          {title}
          </h3>
          <ul className={`text text-white ${isAr ? "text-right" : "text-left"}`}>
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default function CallToAction() {
  const t = useTranslations("home.accountType");
  const productData = [
    {
      icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/standard.webp",
      title: t("standardAccount.heading"),
      benefits: [
        t("standardAccount.desc1"),
        t("standardAccount.desc2"),
        t("standardAccount.desc3"),
        t("standardAccount.desc4"),
        t("standardAccount.desc5"),
        t("standardAccount.desc6"),
        t("standardAccount.desc7"),
        t("standardAccount.desc8"),
    ],
      link: "",
    },
    {
      icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/pro.webp",
      title: t("proAccount.heading"),
      benefits: [
        t("proAccount.desc1"),
        t("proAccount.desc2"),
        t("proAccount.desc3"),
        t("proAccount.desc4"),
        t("proAccount.desc5"),
        t("proAccount.desc6"),
        t("proAccount.desc7"),
        t("proAccount.desc8"),
 
    ],
      link: "",
    },
    {
      icon: "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/ecn.webp",
      title: t("ecnAccount.heading"),
      benefits: [
        t("ecnAccount.desc1"),
        t("ecnAccount.desc2"),
        t("ecnAccount.desc3"),
        t("ecnAccount.desc4"),
        t("ecnAccount.desc5"),
        t("ecnAccount.desc6"),
        t("ecnAccount.desc7"),
        t("ecnAccount.desc8"),
    ],
      link: "",
    },
    
  ];
  return (
    <div className="w-full md:pb-12 3xl:pb-16 md:pt-12 3xl:pt-14 pb-8 pt-5 container">
       <h2 className="HeadingH2">
          {t("heading")}
        </h2>
        <p className="text-accent md:text-base 2xl:text-[17px] text-sm text-center max-w-4xl mx-auto mb-10">
        {t("desc")}
        </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productData?.map((item) => (
          <BackOfCard
            title={item?.title}
            icon={item?.icon}
            benefits={item.benefits}
          />
        ))}
      </div>
      <div className='container flex justify-center items-center pt-10 gap-4 text-sm 2xl:text-[17px]'>
              <Link href='#' className="liveAccount">
              {t("open_live_account")}
                </Link>
            </div>
    </div>
  );
}
