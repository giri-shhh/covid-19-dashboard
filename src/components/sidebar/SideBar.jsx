import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SideBar.module.css';
import AppLogo from './app-logo/AppLogo';
import Tab from './Tab/Tab';

const tabs = ['Dashboard', 'Analytics', 'News', 'Donate', "Do & Don't'"];

function SideBar(props) {
  const [selectedTab, setselectedTab] = useState(0);

  return (
    <div className={styles.container}>
      <AppLogo />
      <div className={styles.tabsContainer}>
        {tabs.map((tab, index) => {
          return <Tab selectedTab={index===selectedTab} tab={tab} />;
        })}
      </div>
    </div>
  );
}

SideBar.propTypes = {};

export default SideBar;
