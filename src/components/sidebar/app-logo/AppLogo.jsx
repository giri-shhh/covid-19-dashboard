import React from 'react';
import styles from './AppLogo.module.css';

const AppLogo = () => {
    return (
      <div>
        <img className={styles.appLogo} src={require('../../../images/app-logo.png')}></img>
      </div>
    );
};

export default AppLogo;
