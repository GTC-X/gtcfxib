import { createTranslator } from "next-intl";
import "aos/dist/aos.css";
import HomePage from "./homePage";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}`
      : `${process.env.NEXT_PUBLIC_BASE_URL}`;

  return {
    title: t("metaData.home.title"),
    description: t("metaData.home.des"),
    alternates: {
      canonical: url,
    },
  };
}
 
export default function Home() {
  
  return (
    <>
     <HomePage/>
    </>
  );
}
