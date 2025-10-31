import { Loader } from '#@/components/main-loader';
import VideoComponent from '#@/components/video/video-component';
import VideoPlayer from '#@/components/video/videoPlayer';
import { titleLarge } from '#@/styles/typography.module.css';
import { Suspense } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import layout from '#@/styles/layout.module.css';
import { SectionDirection } from '#@/components/layout-section';

export default function Page() {
  const listTextContent = [
    {
      primaryContent: 'Nelson Nuñez',
      secondaryContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus',
      avatar: '/avatar1.png',
    },
    {
      primaryContent: 'Nelson Nuñez',
      secondaryContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus',
      avatar: '/avatar2.png',
    },
    {
      primaryContent: 'Nelson Nuñez',
      secondaryContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus',
      avatar: '/avatar3.png',
    },
    {
      primaryContent: 'Nelson Nuñez',
      secondaryContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus',
      avatar: '/avatar4.png',
    },
    {
      primaryContent: 'Nelson Nuñez',
      avatar: '/avatar5.png',
    },
    {
      primaryContent: 'Nelson Nuñez',
      secondaryContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus',
      avatar: '/avatar1.png',
    },
    {
      primaryContent: 'Nelson Nuñez',
      secondaryContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus',
      avatar: '/avatar2.png',
    },
    {
      primaryContent: 'Nelson Nuñez',
      avatar: '/avatar3.png',
    },
    {
      primaryContent: 'Nelson Nuñez',
      secondaryContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus',
      avatar: '/avatar4.png',
    },
  ];

  return (
    <>
      <div className={layout.splitContainer}>
        <div className={layout.left}>
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
            La voz de ellas
          </h1>
          <p>
            Breves recortes textuales de lo que tenía que decir cada
            participante.
          </p>

          <List
            dense={false}
            sx={{
              flex: 3,
              textAlign: 'center',
            }}
          >
            {listTextContent.map((content, index) => {
              return (
                <ListItem
                  key={index}
                  alignItems="flex-start"
                >
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src={content.avatar}
                    />
                  </ListItemAvatar>
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

        <div className={layout.right}>
          <h2>Academia XYZ</h2>
          <p>
            Un breve video con la participación de los pequeños de la Academia
            XYZ, mostrando cómo se vive y se baila la salsa desde los más
            pequeños.
          </p>
          <Suspense fallback={<Loader />}>
            <VideoPlayer sourceUrl={'/chikys_1.mp4'} />
          </Suspense>
        </div>
      </div>
      <div className={layout.card}>
        <SectionDirection>
          <div className={layout.sectionColumn}>
            <h2>Academia XYZ</h2>
            <p>
              Un breve video con la participación de los pequeños de la Academia
              XYZ, mostrando cómo se vive y se baila la salsa desde los más
              pequeños.
            </p>
            <Suspense fallback={<Loader />}>
              <VideoPlayer sourceUrl={'/chikys_2.mp4'} />
            </Suspense>{' '}
          </div>
          <div className={layout.sectionColumn}>
            <h2>Academia XYZ</h2>
            <p>
              Un breve video con la participación de los pequeños de la Academia
              XYZ, mostrando cómo se vive y se baila la salsa desde los más
              pequeños.
            </p>
            <Suspense fallback={<Loader />}>
              <VideoComponent
                src={
                  'https://www.youtube.com/embed/7KxkMLAZlzw?si=6nUCooiqB4gyXCso'
                }
              />
            </Suspense>{' '}
          </div>
          <div className={layout.sectionColumn}>
            <h2>Academia XYZ</h2>
            <p>
              Un breve video con la participación de los pequeños de la Academia
              XYZ, mostrando cómo se vive y se baila la salsa desde los más
              pequeños.
            </p>
            <Suspense fallback={<Loader />}>
              <VideoPlayer sourceUrl={'/chikys_3.mp4'} />
            </Suspense>
          </div>
        </SectionDirection>
      </div>
    </>
  );
}
