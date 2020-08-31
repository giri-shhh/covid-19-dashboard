import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideBar.module.css';
import AppLogo from './app-logo/AppLogo';
import Tab from './Tab/Tab';

const tabs = ['Dashboard', 'Analytics', 'News', 'Donate', "Do & Don't'"];

function SideBar(props) {
  return (
    <div className={styles.container}>
      <AppLogo />
      <div className={styles.tabsContainer}>
        {tabs.map((tab) => {
          return <Tab tab={tab} />;
        })}
      </div>
    </div>
  );
}

SideBar.propTypes = {};

export default SideBar;
