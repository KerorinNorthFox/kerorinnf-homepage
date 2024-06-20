import DateText from "@/components/Text/DateText";

interface PostsHeadingTileProps {
  post: any;
  category: string;
}

const PostHeadingTile = (props: PostsHeadingTileProps) => {
  const { post, category } = props;

  return (
    <div className="rounded-lg border border-gray-300 hover:shadow-lg">
      <a href={`/${category}/${post.slug}/`}>
        <div className="flex h-36 w-full items-center">
          <div className="hidden h-full sm:block">
            {post.data.headingImage ? (
              <img
                className="h-full w-48 min-w-48 rounded-l-lg object-cover"
                src={post.data.headingImage}
              />
            ) : (
              <div className="w-48"></div>
            )}
          </div>
          <div className="w-full text-wrap p-4 sm:w-[calc(100%_-_12rem)]">
            <p className="truncate text-lg font-bold">{post.data.title}</p>
            <p className="mt-2">
              <DateText
                publishedDate={post.data.publishedDate}
                updatedDate={post.data.updatedDate}
              />
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PostHeadingTile;
