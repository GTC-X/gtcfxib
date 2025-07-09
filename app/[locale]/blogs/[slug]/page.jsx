import { fetchAPI } from "../../components/utilities/fetch-api";
import SingleBlog from "../../pages/SingleBlog";

export async function generateMetadata({ params, searchParams }, parent) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = `/blogs`;

  // Define the 'locale' variable based on the condition
  const locale = params?.locale == "zh-hans" ? "zh-Hans" : params?.locale;

  const urlParamsObject = {
    sort: { createdAt: "desc" },
    populate: {
      imageUrl: { populate: ["url"] },
      category: { populate: "*" },
      author: {
        populate: "*",
      },
    },
    locale: locale, // Use the defined 'locale' variable
    filters: {
      slug: decodeURIComponent(params?.slug),
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const product = await fetchAPI(path, urlParamsObject, options);
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/${"blogs"}/${params?.slug}`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/${"blogs"}/${params?.slug}`;

  return {
    title: product?.data?.[0]?.attributes?.title,
    description: product?.data?.[0]?.attributes?.short_descreption,
    metadataBase: new URL("https://www.gtcfx.com"),
    openGraph: {
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${product?.data?.[0]?.attributes?.imageUrl?.data?.attributes?.url}`, // Must be an absolute URL
        },
      ],
      title: product?.data?.[0]?.attributes?.title,
      description: product?.data?.[0]?.attributes?.short_descreption,
      url: `https://www.gtcfx.com/${"blogs"}/${params?.slug}`,
    },
    alternates: {
      canonical: url,
    },
  };
}

const Page = () => {
  return <div>
    <SingleBlog url="blogs"/>
  </div>
};

export default Page;
