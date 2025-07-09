import {createTranslator} from "next-intl";
import {Suspense} from "react";
import ForexPage from "../../pages/(products)/Forex";

export async function generateMetadata({params: {locale}}) {
    const messages = (await import(`../../../../messages/${locale}.json`)).default;
    const t = createTranslator({locale, messages});
    const url =
        locale != "en"
            ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/forex`
            : `${process.env.NEXT_PUBLIC_BASE_URL}/forex`;


    return {
        title: t("metaData.forex.title"),
        description: t("metaData.forex.des"),
        alternates: {
            canonical: url,
        },
    };
}

const Page = () => {
    return <ForexPage/>;

};

export default Page;