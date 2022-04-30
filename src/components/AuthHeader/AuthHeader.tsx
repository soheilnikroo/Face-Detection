import { IonBackButton, IonButtons, IonHeader, IonIcon } from '@ionic/react';
import React from 'react';

import { chevronBack as backIcon } from 'ionicons/icons';
import classes from './style/AuthHeader.module.css';
import { useHistory } from 'react-router';

interface AuthHeaderProps {
  title: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ title }) => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <IonHeader className={`ion-no-border ${classes['header']}`}>
      <div
        tabIndex={0}
        role="button"
        onClick={goBack}
        className={classes['back']}
      >
        <IonIcon className={classes['back-icon']} icon={backIcon} />
        Back
      </div>
      <h1 className={classes['header-title']}>{title}</h1>
    </IonHeader>
  );
};

export default AuthHeader;
