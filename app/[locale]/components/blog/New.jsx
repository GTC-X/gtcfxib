import React from "react";

const New = (props) => {
  const { posts } = props;
  return (
    <div className="relative mx-auto max-w-7xl">
      <div className="mx-auto mt-8 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post?.title}
            className="flex flex-col overflow-hidden rounded-lg shadow-lg"
          >
            <div className="flex-shrink-0">
              <img
                className="h-44 w-full object-cover"
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post?.attributes?.imageUrl?.data?.attributes?.url}`}
                alt=""
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-secondary">
                  <a className="hover:underline">
                    {post?.attributes?.category?.data?.attributes?.name}
                  </a>
                </p>
                <a className="mt-2 block">
                  <p className="text-xl font-semibold text-primary">
                    {post?.attributes?.title}
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a>
                    <span className="sr-only">
                      {post?.attributes?.author?.name || ""}
                    </span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src={post?.author?.imageUrl}
                      alt=""
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-primary font-semibold">
                    <a className="hover:underline">{post?.author?.name}</a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post?.datetime}>{post?.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;
