import { headlineLarge, labelMedium } from '#@/styles/typography.module.css';
import layout from '#@/styles/layout.module.css';
import page from '#@/styles/page.module.css';
import AudioPlayer from '#@/components/audio';

export default function Page() {
  return (
    <div className={layout.textContainer}>
      <div className={layout.splitContainer}>
        <div className={layout.left}>
          <h5 className={headlineLarge}>mapa interactivo</h5>

          <iframe
            src="https://www.google.com/maps/d/embed?mid=11QJqlNl84myGamP9h_yrPC44QhrZ9kk&ehbc=2E312F"
            width="auto"
            height="auto"
          ></iframe>
        </div>
        <div className={layout.right}>
          <div className={layout.sectionColumn}>
            <h6 className={labelMedium}>Audio de las escuelas</h6>
            <AudioPlayer sourceUrl={'/audio1.mp3'} />
          </div>
          <div className={layout.sectionColumn}>
            <h6 className={labelMedium}>Audio de las escuelas</h6>
            <AudioPlayer sourceUrl={'/audio1.mp3'} />
          </div>
          <div className={layout.sectionColumn}>
            <h6 className={labelMedium}>Audio de las escuelas</h6>
            <AudioPlayer sourceUrl={'/audio1.mp3'} />
          </div>
          <div className={layout.sectionColumn}>
            <h6 className={labelMedium}>Audio de las escuelas</h6>
            <AudioPlayer sourceUrl={'/audio1.mp3'} />
          </div>
          <div className={layout.sectionColumn}>
            <h6 className={labelMedium}>Audio de las escuelas</h6>
            <AudioPlayer sourceUrl={'/audio1.mp3'} />
          </div>
          <div className={layout.sectionColumn}>
            <h6 className={labelMedium}>Audio de las escuelas</h6>
            <AudioPlayer sourceUrl={'/audio1.mp3'} />
          </div>
          <div className={layout.sectionColumn}>
            <h6 className={labelMedium}>Audio de las escuelas</h6>
            <AudioPlayer sourceUrl={'/audio1.mp3'} />
          </div>
          <div className={layout.sectionColumn}>
            <h6 className={labelMedium}>Audio de las escuelas</h6>
            <AudioPlayer sourceUrl={'/audio1.mp3'} />
          </div>
          <div className={layout.sectionColumn}>
            <h6 className={labelMedium}>Audio de las escuelas</h6>
            <AudioPlayer sourceUrl={'/audio1.mp3'} />
          </div>
          <div className={layout.sectionColumn}>
            <h6 className={labelMedium}>Audio de las escuelas</h6>
            <AudioPlayer sourceUrl={'/audio1.mp3'} />
          </div>
          <div className={layout.sectionColumn}>
            <h6 className={labelMedium}>Audio de las escuelas</h6>
            <AudioPlayer sourceUrl={'/audio1.mp3'} />
          </div>
        </div>
      </div>
    </div>
  );
}
