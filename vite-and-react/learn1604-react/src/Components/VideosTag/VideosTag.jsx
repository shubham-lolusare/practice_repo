import { useEffect, useRef } from "react";

export default function VideosTag({ src, isPlaying }) {
  let video = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      video.current.play();
      console.log("Playing video");
    } else {
      video.current.pause();
      console.log("Paused video");
    }
  }, [isPlaying]);

  return <video src={src} loop ref={video}></video>;
}
