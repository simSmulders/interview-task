import { useRef, useEffect } from 'react';

export default function MyPlayer (props) {

  const { videoId } = props;
  const playerRef = useRef(null);

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
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={playerRef}></div>;
};