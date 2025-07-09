"use-client";

import BlogItem from "./BlogItem";

export default function BlogList(props) {
  const { posts, index } = props;
  return (
    <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3 mt-10">
      {posts?.slice(index, posts?.length)?.map((post) => (
        <BlogItem
          key={post?.id || index}
          data={post?.attributes}
          id={post?.id}
        />
      ))}
    </div>
  );
}
