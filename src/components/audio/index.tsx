'use client';
import { Suspense, useRef, useState } from 'react';
import { Loader } from '../main-loader';
import { sectionColumn } from '#@/styles/layout.module.css';
import { button } from './styles.module.css';

export default function AudioPlayer({ sourceUrl }: { sourceUrl: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const ref = useRef<HTMLAudioElement | null>(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;

    setIsPlaying(nextIsPlaying);

    if (ref.current) {
      if (nextIsPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  }
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
      className={sectionColumn}
    >
      <Suspense fallback={<Loader />}>
        <audio
          ref={ref}
          //loop
          //poster={'loading.gif'}
          onPlay={() => {
            return setIsPlaying(true);
          }}
          onPause={() => {
            return setIsPlaying(false);
          }}
        >
          <source
            src={sourceUrl}
            type="audio/mpeg"
          />
        </audio>
      </Suspense>
      <button
        onClick={handleClick}
        className={button}
      >
        {isPlaying ? 'Pausar' : 'Reproducir'}
        <span className={'material-symbols-outlined'}>
          {isPlaying ? 'pause_circle' : 'play_circle'}
        </span>
      </button>
    </div>
  );
}
