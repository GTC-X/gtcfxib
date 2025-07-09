import { useLocale } from "next-intl";
import { useRouter } from "next-intl/client";
import Link from "next/link";

const BlogItem = (props) => {
  const { data, id } = props;
  const router = useRouter();
  const locale = useLocale();
  const handleNavigate = () => {
    router.push(`/${data?.category?.data?.attributes?.slug}/${data?.slug}`, {
      locale: locale,
    });
  };
  return (
    <article
      className="flex flex-col items-start shadow-md rounded-md hover:shadow-xl cursor-pointer"
      onClick={() => {
        handleNavigate();
      }}
    >
      <div className="relative w-full bg-gray-200">
        <img
          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data?.imageUrl?.data?.attributes?.url}`}
          fill
          alt="blog pic"
          className="object-contain rounded-md w-full h-[100%] md:h-60 "
        />
      </div>
      <div className="w-full p-4">
        <div className="mt-2 flex items-center gap-x-4 text-xs">
          <Link
            href={data?.href || ""}
            className="relative z-10 rounded-full bg-secondary px-3 py-1.5 text-white "
          >
            {data?.category?.data?.attributes?.name}
          </Link>
         
        </div>
        <div className="group relative mt-2">
          <h3 className="text-xl font-normal capitalize">
            <Link href={data?.id || ""}>
              <span className="absolute inset-0" />
              {data?.title}
            </Link>
          </h3>
        </div>
      </div>
    </article>
  );
};

export default BlogItem;
