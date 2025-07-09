import { useLocale } from "next-intl";
import { useRouter } from "next-intl/client";

const MorePosts = (props) => {
  const { recentData } = props;
  const router = useRouter();
  const locale = useLocale();
  const handleNavigate = (post) => {
    router.push(
      `/${post?.attributes?.category?.data?.attributes?.slug}/${post?.attributes?.slug}`,
      { locale: locale }
    );
  };
  return (
    <div className="pt-2">
      <p className="py-5 text-xl font-semibold">More Posts</p>
      <div>
        {recentData?.map((post) => {
          return (
            <article
              className="grid grid-cols-3 gap-3 mb-5 cursor-pointer"
              key={post?.id}
              onClick={() => {
                handleNavigate(post);
              }}
            >
              <div className="">
                <img
                  className="w-[400px]"
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post?.attributes?.imageUrl?.data?.attributes?.url}`}
                  alt=""
                />
              </div>
              <div className="flex flex-col col-span-2 m-0">
                <h3 className="text-primary text-[14px] line-clamp-1 font-[500] mb-2">
                  {post?.attributes?.title}
                </h3>
                <p className="text text-xs ltr:text-left rtl:text-right line-clamp-2">
                  {post?.attributes?.short_descreption}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default MorePosts;
