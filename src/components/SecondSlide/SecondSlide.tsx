import { IonButton, IonFooter, IonImg, IonSlide, IonText } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router';
import { secondStep } from '../../assets';

import classes from './style/SecondSlide.module.css';

interface SecondSlideProps {
  theme: string;
}

const SecondSlide: React.FC<SecondSlideProps> = ({ theme }) => {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push('/auth/login');
  };

  const goToSigninPage = () => {
    history.push('/auth/signin');
  };

  return (
    <IonSlide>
      <section className={classes['second-slide-container']}>
        <section
          style={theme === 'dark' ? { backgroundColor: '#252e49' } : {}}
          className={classes['second-slide']}
        >
          {theme === 'dark' && (
            <IonImg
              className={classes['welcome__image']}
              src={secondStep}
              alt="first step"
            />
          )}
          <article className={classes['welcome-article']}>
            <h1 className={classes['welcome__title--2']}>First Step!</h1>
            <IonText className={classes['welcome__description--2']}>
              Create your account and get ready. if you already have an account
              click log in button,then you good to continue your journy.
            </IonText>
          </article>
        </section>
        <IonFooter
          translucent={false}
          className={`ion-no-border ${classes['footer']}`}
        >
          {theme === 'dark' ? (
            <section className={classes['buttons']}>
              <IonButton
                onClick={goToSigninPage}
                type="button"
                className={classes['button--outlined']}
              >
                SIGN UP
              </IonButton>
              <IonButton
                onClick={goToLoginPage}
                type="button"
                className={classes['button']}
              >
                LOG IN
              </IonButton>
            </section>
          ) : null}
        </IonFooter>
      </section>
    </IonSlide>
  );
};

export default SecondSlide;
