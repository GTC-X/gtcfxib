import Aos from "aos";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function UnderStandingHostingReal() {
  const t = useTranslations("prime-tech");
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);

  return (
    <div
      className="w-full py-10 2xl:py-20 3xl:py-24 container"
    >
      <h2 className="HeadingH2">
        {t("vpsHosting.understandingVps.title")}
      </h2>
      <p className=" text">
        {t("vpsHosting.understandingVps.para")}
      </p>
    </div>
  );
}

