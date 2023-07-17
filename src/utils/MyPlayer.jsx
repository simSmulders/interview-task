import { useRef, useEffect } from 'react';
import {
  usePatchVideoAt40PctMutation,
  usePatchVideoFinishedMutation
} from '../slices/api/api';

export default function MyPlayer (props) {

  const { videoId, userId } = props;
  const playerRef = useRef(null);

  const [ patchVideoAt40Pct ] = usePatchVideoAt40PctMutation();
  const [ patchVideoFinished ] = usePatchVideoFinishedMutation();

  const sendVideoAt40Pct = ({ userId, videoId }) => {
    patchVideoAt40Pct({ userId, videoId })
  };

  const sendVideoFinished = ({ userId, videoId }) => {
    patchVideoFinished({ userId, videoId })
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://demo.bbvms.com/launchpad/';
    script.async = true;

    script.onload = () => {
      const myPlayer = new window.bluebillywig.Player(
        `https://demo.bbvms.com/p/default/c/${videoId}.json`,
        {
          target: playerRef.current,
          autoPlay: false
        }
      );

      myPlayer.play();

      myPlayer.on('pause', onPause)

      function onPause() {

        if (myPlayer.getCurrentTime() / myPlayer.getDuration() > 0.4) {
          sendVideoAt40Pct({ userId, videoId });
        }

        if (myPlayer.getCurrentTime() === myPlayer.getDuration()) {
          sendVideoFinished({ userId, videoId });
        }
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={playerRef}></div>;
};