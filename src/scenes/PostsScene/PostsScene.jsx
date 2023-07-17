import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import papa from 'papaparse';
import { useGetPostByIdQuery } from '../../slices/api/api';
import { MyPlayer } from '../../utils';

export default function PostsScene () {

  const { postId } = useParams();

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

  const videoId = csvData?.find(item => item[0] === postId)[1];

  return post && (
    <>
      <div>
        {post.title}
      </div>
      <div>
        {post.body}
      </div>
      <MyPlayer videoId={videoId} />
    </>
)};