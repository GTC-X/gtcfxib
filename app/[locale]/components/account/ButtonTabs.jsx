"use-client";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next-intl/client";
import { usePathname } from "next/navigation";

const ButtonTabs = () => {
  const t = useTranslations("Instruments");
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const tabData = [
    {
      name: t("commonTabs.btn1"),
      url: "/forex",
    },
    {
      name: t("commonTabs.btn2"),
      url: "/precious-metals",
    },
    {
      name: t("commonTabs.btn3"),
      url: "/cfd-energy",
    },
    {
      name: t("commonTabs.btn4"),
      url: "/stock",
    },
    {
      name: t("commonTabs.btn5"),
      url: "/indices",
    },
  ];
  return (
    <div className="w-full text-center  pb-8 ">
      <div
        className="join bg-secondary  border-none rounded-full border-secondary py-0"
        style={{
          boxShadow: " 0px 10px 30px 0px rgba(0, 0, 0, 0.35)",
        }}
      >
        {tabData?.map((single, index) => (
          <>
            <button
              key={index}
              className={`md:px-4 px-2 py-4  font-semibold first:rounder-l-[25px] last:rounded-r-[25px] join-item bg-${
                pathname?.includes(single?.url) ? "primary" : "secondary"
              } border-none hover:bg-primary  text-${
                pathname?.includes(single?.url) ? "white" : "primary"
              }  capitalize hover:text-white border-secondary `}
              onClick={() => {
                router.push(single?.url), { locale: locale };
              }}
            >
              {single?.name}
            </button>
            {index != tabData?.length - 1 && (
              <div className="divider divider-horizontal bg-primary w-[4px] mx-0 my-4 rounded-none" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};
export default ButtonTabs;
