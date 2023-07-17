import { Link as RouterLink } from 'react-router-dom';
import { useGetPostsQuery } from "../../slices/api/api";
import { Link, Stack, Sheet, Box } from '@mui/joy';
import { styled } from '@mui/joy/styles';

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
}));

export default function MainScene () {

  const { data: posts } = useGetPostsQuery();

  return (
    <Box sx={{ width: '100%' }}>
      <Stack>
        {posts?.map(post => <Item key={post.id}>
            <Link
              component={RouterLink}
              to={`/posts/${post.id}`}
            >
              {post.title}
            </Link>
          </Item>)}
      </Stack>
    </Box>
  )

};