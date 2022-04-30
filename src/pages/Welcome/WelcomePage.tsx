import { IonContent, IonPage, IonSlides } from '@ionic/react';
import React, { useContext, useState } from 'react';
import { FirstSlide, Header, ThirdSlide } from '../../components';
import SecondSlide from '../../components/SecondSlide/SecondSlide';
import { AuthContext } from '../../context/auth-context';

import classes from './style/WelcomePage.module.css';

const WelcomePage: React.FC = () => {
  const { isLogedIn } = useContext(AuthContext);

  const [theme, setTheme] = useState('light');

  const slideOpts = {
    initialSlide: isLogedIn ? 2 : 0,
    speed: 400,
  };

  const slideChangHandler = (event: any) => {
    event.target.getActiveIndex().then((index: number) => {
      if (index === 1) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    });
  };

  return (
    <IonPage>
      <Header theme={theme} />
      <IonContent className={classes['content']}>
        <IonSlides
          pager={true}
          onIonSlideWillChange={slideChangHandler}
          options={slideOpts}
        >
          <FirstSlide />
          <SecondSlide theme={theme} />
          {isLogedIn && <ThirdSlide />}
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default WelcomePage;
