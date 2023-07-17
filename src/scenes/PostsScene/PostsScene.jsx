import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import papa from 'papaparse';
import { useGetPostByIdQuery } from '../../slices/api/api';
import { MyPlayer } from '../../utils';
import { Box, Typography } from '@mui/joy';

export default function PostsScene () {

  const { postId } = useParams();

  //could also get the userId from the post but this is how it could be done via query params
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();
  const userId = query.get('user');

  const { data: post } = useGetPostByIdQuery({postId});

  const dataFilePath = require('../../static/mapping.csv');

  const [ csvData, setCsvData ] = useState(null);

  useEffect(() => {

    const fetchParseData = async () => {
      papa.parse(dataFilePath, {
        download: true,
        delimiter: ',',
        skipEmptyLines: true,
        complete: (result => setCsvData(result.data))
      })
    }
    fetchParseData()
  }, []);

  const videoId = useMemo(() => {

    if (!csvData || !postId) {
      return;
    }

    return csvData?.find(item => item[0] === postId)[1];
  }, [ csvData, postId ]);

  return post && (
    <>
      <Box sx={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography level="h2">
          {post.title}
        </Typography>
        <Typography level='h5'>
          {post.body}
        </Typography>
        <Box sx={{ width: '640px' }}>
          <MyPlayer videoId={videoId} userId={userId} />
        </Box>
      </Box>
    </>
)};