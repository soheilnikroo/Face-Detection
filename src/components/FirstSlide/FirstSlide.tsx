import { IonImg, IonSlide, IonText } from '@ionic/react';
import React from 'react';
import { faceDetection } from '../../assets';

import classes from './style/FirstSlide.module.css';

interface FirstSlideProps {}

const FirstSlide: React.FC<FirstSlideProps> = () => {
  return (
    <IonSlide>
      <section className={classes['first-slide-container']}>
        <section className={classes['first-slide']}>
          <IonImg
            className="welcome__image"
            src={faceDetection}
            alt="face detection"
          />
          <article className={classes['welcome-article']}>
            <h1 className={classes['welcome__title']}>Welcome!</h1>
            <IonText className={classes['welcome__description']}>
              Circle, a face detection app which provides a jpeg formatted file
              of your face.
            </IonText>
          </article>
        </section>
      </section>
    </IonSlide>
  );
};

export default FirstSlide;
