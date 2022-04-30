import { IonHeader, IonImg } from '@ionic/react';
import React from 'react';
import { logoDark, logoWhite } from '../../assets';

import classes from './style/Header.module.css';

interface HeaderProps {
  theme: string;
}

const Header: React.FC<HeaderProps> = ({ theme }) => {
  return (
    <IonHeader className={`ion-no-border ${classes[`header-${theme}`]}`}>
      <IonImg
        className={classes['header-logo']}
        src={theme === 'light' ? logoDark : logoWhite}
        alt="face detection"
      />
    </IonHeader>
  );
};

export default Header;
