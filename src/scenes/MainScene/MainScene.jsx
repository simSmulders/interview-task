import { Link as RouterLink } from 'react-router-dom';
import { useGetPostsQuery } from "../../slices/api/api";
import { Link, Stack, Sheet, Box } from '@mui/joy';
import { styled } from '@mui/joy/styles';
import logo from '../../static/logo.png';

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
        <Item>
          <img src={logo} alt="" width="640px"/>
        </Item>

        {posts?.map(post => <Item key={post.id}>
            <Link
              component={RouterLink}
              to={`/posts/${post.id}?user=${post.userId}`}
            >
              {post.title}
            </Link>
          </Item>)}
      </Stack>
    </Box>
  )

};