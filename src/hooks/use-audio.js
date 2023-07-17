import React, { useEffect, useState } from "react";

const useAudio = (url) => {
  const [audio] = useState(typeof Audio !== 'undefined' ? new Audio(url) : undefined);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    console.log('dupsko')
    setPlaying(!playing);

  
  };



  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));

    return () => {
      audio.addEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

export default useAudio;
