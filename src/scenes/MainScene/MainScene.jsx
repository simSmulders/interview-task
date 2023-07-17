import { Link as RouterLink } from 'react-router-dom';
import { useGetPostsQuery } from "../../slices/api/api";
import Link from '@mui/joy/Link';

export default function MainScene () {

  const { data: posts } = useGetPostsQuery();

  return (
    <ul>
      {posts?.map(post => <li key={post.id}>
          <Link
            component={RouterLink}
            to={`/posts/${post.id}`}
          >
            {post.title}
          </Link>
        </li>)}
    </ul>
  )

};