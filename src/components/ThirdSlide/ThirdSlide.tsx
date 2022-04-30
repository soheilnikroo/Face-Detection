import { IonButton, IonFooter, IonImg, IonSlide, IonText } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router';
import { thirdSlideImage } from '../../assets';

import classes from './style/ThirdSlide.module.css';

const ThirdSlide: React.FC = () => {
  const history = useHistory();

  const goToHomePage = () => {
    history.push('/home');
  };

  return (
    <IonSlide>
      <section className={classes['third-slide-container']}>
        <section className={classes['third-slide']}>
          <IonImg
            className={classes['welcome__image']}
            src={thirdSlideImage}
            alt="face detection"
          />
          <article className={classes['welcome-article']}>
            <h1 className={classes['welcome__title']}>Alex Chen</h1>
            <IonText className={classes['welcome__description']}>
              “Alex” everything is set, now you can use the app
            </IonText>
          </article>
        </section>
      </section>
      <IonFooter
        translucent={false}
        className={`ion-no-border ${classes['footer']}`}
      >
        <section className={classes['buttons']}>
          <IonButton
            onClick={goToHomePage}
            type="button"
            className={classes['button']}
          >
            <p className={classes['button-text']}>START</p>
          </IonButton>
        </section>
      </IonFooter>
    </IonSlide>
  );
};

export default ThirdSlide;
