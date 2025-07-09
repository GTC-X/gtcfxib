import { useLocale } from "next-intl";
import { useRouter } from "next-intl/client";
import Image from "next/image";

export default function SingleMainBlog(props) {
  const { posts } = props;
  const locale = useLocale();
  const router = useRouter();
  const handleNavigate = (blog) => {
    router.push(
      `/${blog?.attributes?.category?.data?.attributes?.slug}/${blog?.attributes?.slug}`,
      { locale: locale }
    );
  };
  return (
    <div className="space-y-20 lg:space-y-20">
      <article
        key={posts?.id}
        className="relative isolate flex flex-col gap-8 lg:flex-row md:items-center"
      >
        <div className="basis-full md:basis-7/12">
          <div className="relative w-full h-56 md:h-[436px]">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${posts?.attributes?.imageUrl?.data?.attributes?.url}`}
              fill
              alt={"title"}
              className="object-contain rounded-lg"
            />
          </div>
        </div>
        <div
          className="basis-full md:basis-5/12  cursor-pointer"
          onClick={() => {
            handleNavigate(posts);
          }}
        >
          <div className="flex items-center gap-x-4 text-xs">

            <a className="relative z-10 rounded-full bg-secondary px-3 py-1.5 text-white">
              {posts?.attributes?.category?.data?.attributes?.name}
            </a>
          </div>
          <div className="group relative max-w-xl">
            <h3 className="mt-3 HeadingH2 text-left leading-10">
              <a>
                <span className="absolute inset-0" />
                {posts?.attributes?.title}
              </a>
            </h3>
            <p className="mt-5 text text-left leading-6 text-primary">
              {posts?.attributes?.short_descreption}
            </p>
          </div>
          <div className="mt-6 flex border-t border-gray-900/5 pt-6">
            <div className="relative flex items-center gap-x-4">
              {posts?.attributes?.author != null && (
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${posts?.attributes?.author?.authorImg?.data?.attributes?.url}`}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
              )}
              <div className="text text-left leading-6">
                <p className="font-semibold text-gray-900">
                  <a>
                    <span className="absolute inset-0" />
                    {posts?.attributes?.author?.name}
                  </a>
                </p>
                <p className="text text-left">
                  {posts?.attributes?.author?.designation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
