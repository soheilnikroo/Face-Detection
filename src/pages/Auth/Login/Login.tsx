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
import { LoginIamge } from '../../../assets';
import {
  AuthHeader,
  EmailInput,
  PasswordInput,
  PrimaryButton,
} from '../../../components';
import { AuthContext } from '../../../context/auth-context';
import { useForm } from '../../../hooks';
import { validations } from '../../../util';

import classes from './style/Login.module.css';

const Login: React.FC = () => {
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
      <AuthHeader title="Log In" />
      <IonContent fullscreen>
        <section className={classes['login']}>
          <IonImg
            className={classes['login-img']}
            src={LoginIamge}
            alt="login"
          />
          <section className={classes['login-form']}>
            <h2 className={classes['login-form__title']}>
              Log in by using email
            </h2>
            <form
              onSubmit={formSubmitHandler}
              className={classes['login-form__form']}
            >
              <div className={classes['login-inputs']}>
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
                    text="Log In"
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

export default Login;
