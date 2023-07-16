import { useGetPostsQuery } from "../../slices/api/api";

export default function PostsScene () {

  const { data: posts } = useGetPostsQuery();
  return (
    <>
      <div>
        Posts:
      </div>
      <div>
        {posts?.map(post => post.title)}
      </div>
    </>
)};