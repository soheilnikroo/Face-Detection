import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { App } from './app';
import { AuthProvider } from './context';
import { SplashScreen } from '@capacitor/splash-screen';

window.screen.orientation.lock('portrait');

const splashScreen = async () => {
  // Show the splash for two seconds and then automatically hide it:
  await SplashScreen.show({
    showDuration: 2000,
    autoHide: true,
  });
};

splashScreen();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

reportWebVitals();
