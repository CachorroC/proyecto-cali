import { Loader } from '#@/components/main-loader';
import VideoComponent from '#@/components/video/video-component';
import VideoPlayer from '#@/components/video/videoPlayer';
import styles from './styles.module.css';
import { titleLarge } from '#@/styles/typography.module.css';
import { Suspense } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';

export default function Page() {
  const listTextContent = [
    {
      primaryContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus`,
      secondaryContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus`,
    },
    {
      primaryContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus`,
      secondaryContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus`,
    },
    {
      primaryContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus`,
      secondaryContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus`,
    },
    {
      primaryContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus`,
      secondaryContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus`,
    },
    {
      primaryContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus`,
    },
    {
      primaryContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus`,
      secondaryContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus`,
    },
    {
      primaryContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus`,
      secondaryContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus`,
    },
    {
      primaryContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus`,
    },
    {
      primaryContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus`,
      secondaryContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus`,
    },
  ];
  return (
    <>
      <div className={styles.splitContainer}>
        <div className={styles.left}>
          <h1
            className={titleLarge}
            style={{
              display: 'flex',
              flexFlow: 'column nowrap',
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              flex: 1,
            }}
          >
            La voz de ellas, citas de las mujeres
          </h1>

          <List dense={false} >
            {listTextContent.map((content, index) => {
              return (
                <ListItem key={index}>
                  <ListItemIcon>
                    <span className={'material-symbols-outlined'}>woman</span>
                  </ListItemIcon>
                  <ListItemText
                    primary={content.primaryContent}
                    secondary={
                      content.secondaryContent ? content.secondaryContent : null
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </div>

        <div className={styles.right}>
          <Suspense fallback={<Loader />}>
            <VideoPlayer sourceUrl={'/baileVideo.mp4'} />
          </Suspense>
        </div>
      </div>
      <Paper elevation={3}>
        <div className={styles.sectionRow}>
          <div className={styles.sectionColumn}>
            <Suspense fallback={<Loader />}>
              <VideoPlayer sourceUrl={'/baileVideo.mp4'} />
            </Suspense>{' '}
          </div>
          <div className={styles.sectionColumn}>
            <Suspense fallback={<Loader />}>
              <VideoComponent
                src={
                  'https://www.youtube.com/embed/7KxkMLAZlzw?si=6nUCooiqB4gyXCso'
                }
              />
            </Suspense>{' '}
          </div>
          <div className={styles.sectionColumn}>
            <Suspense fallback={<Loader />}>
              <VideoPlayer sourceUrl={'/salsa_baile_3.mp4'} />
            </Suspense>
          </div>
        </div>
      </Paper>
    </>
  );
}
