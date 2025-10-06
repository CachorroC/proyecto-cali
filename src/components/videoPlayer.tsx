'use client';
import { icon } from '#@/styles/layout.module.css';
import { useState, useRef } from 'react';

export default function VideoPlayer(
  {
    sourceUrl
  }: {sourceUrl:string}
) {
  const [
    isPlaying,
    setIsPlaying
  ] = useState(
    false
  );

  const ref = useRef<HTMLVideoElement|null>(
    null
  );

  function handleClick() {
    const nextIsPlaying = !isPlaying;

    setIsPlaying(
      nextIsPlaying
    );

    if ( ref.current ) {
      if ( nextIsPlaying ) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }


  }

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying
          ? 'Pause'
          : 'Play' }
        <span className={ `material-symbols-outlined ${ icon }` }>
          {isPlaying
            ? 'pause_circle'
            : 'play_circle'}
        </span>
      </button>
      <video
        ref={ref}
        onPlay={() => {
          return setIsPlaying(
            true
          );
        }}
        onPause={() => {
          return setIsPlaying(
            false
          );
        }}
      >
        <source
          src={sourceUrl}
          type="video/mp4"
        />
      </video>
    </>
  );
}
