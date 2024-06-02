import FormattedDate from "./FormattedDate.astro";

interface PostsHeadingTileProps {
  post: any
  category: string
}

const PostHeadingTile = (props: PostsHeadingTileProps) => {
  const { post, category } = props;

  return(
    <li className="m-4">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
        <a href={`/${category}/${post.slug}/`}>
          <img
            width="960"
            height="480"
            className="rounded-t-lg"
            src={post.data.headingImage}
            alt="" />
          <div className="p-5">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              {post.data.title}
            </h5>
            <p className="mt-2 font-normal text-gray-700">
              {post.data.publishedDate.toISOString()}
            </p>
            <div className="mt-3 px-3 py-2 inline-flex items-center">
              <p className="text-sm font-medium text-center text-light-text">{post.data.description}</p>
            </div>
          </div>
        </a>
      </div>
    </li>
  );
}

export default PostHeadingTile;