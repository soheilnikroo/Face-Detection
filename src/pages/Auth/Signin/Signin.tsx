import {
  InputChangeEventDetail,
  IonContent,
  IonFooter,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { SiginImage } from '../../../assets';
import {
  AuthHeader,
  EmailInput,
  PasswordInput,
  PrimaryButton,
} from '../../../components';
import { AuthContext } from '../../../context/auth-context';
import { useForm } from '../../../hooks';
import { validations } from '../../../util';

import classes from './style/Signin.module.css';

const Signin: React.FC = () => {
  const { loginHandler } = useContext(AuthContext);

  const history = useHistory();

  const [isFormValid, setIsFormValid] = useState(false);

  const [emailInput, setEmailInput, emailError, setEmailError] = useForm(
    validations.emailValidationOptions
  );

  const [passwordInput, setPasswordInput, passwordError, setPasswordError] =
    useForm(validations.passwordValidationOptions);

  const checkFormValidation = useCallback(() => {
    if (
      emailError !== '' ||
      passwordError !== '' ||
      !emailInput ||
      !passwordInput
    ) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [emailError, passwordError, emailInput, passwordInput]);

  const inputChangeHandler = (
    event: CustomEvent<InputChangeEventDetail>,
    type: string
  ): void => {
    if (type === 'password') {
      setPasswordInput(event.detail.value);
    } else {
      setEmailInput(event.detail.value);
    }
  };

  useEffect(() => {
    setIsFormValid(false);
    let validationTimer = setTimeout(() => {
      checkFormValidation();
    }, validations.timeCheck);

    return () => {
      clearTimeout(validationTimer);
    };
  }, [
    emailInput,
    passwordInput,
    emailError,
    passwordError,
    checkFormValidation,
  ]);

  const goToWelcomePage = () => {
    history.replace('/');
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginHandler();
    goToWelcomePage();
  };

  return (
    <IonPage>
      <AuthHeader title="Sign Up" />
      <IonContent fullscreen>
        <section className={classes['signin']}>
          <IonImg
            className={classes['signin-img']}
            src={SiginImage}
            alt="Sign Up"
          />
          <section className={classes['signin-form']}>
            <h2 className={classes['signin-form__title']}>
              Create account by using email
            </h2>
            <form
              onSubmit={formSubmitHandler}
              className={classes['signin-form__form']}
            >
              <div className={classes['signin-inputs']}>
                <EmailInput
                  errorMessage={emailError}
                  onChange={(event) => {
                    inputChangeHandler(event, 'email');
                  }}
                />
                <PasswordInput
                  iconSrc
                  errorMessage={passwordError}
                  onChange={(event: any) => {
                    inputChangeHandler(event, 'password');
                  }}
                />
              </div>
              <IonFooter className={`ion-no-border ${classes['footer']}`}>
                <div className={classes['button-wrapper']}>
                  <PrimaryButton
                    disabled={!isFormValid}
                    type="submit"
                    text="Sign Up"
                  />
                </div>
              </IonFooter>
            </form>
          </section>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Signin;
