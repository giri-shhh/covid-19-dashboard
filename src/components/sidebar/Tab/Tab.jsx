import React from 'react';
import styles from './Tab.module.css';

const Tab = (props) => {
  return (
    <div
      className={styles.container}
      style={
        props.selectedTab
          ? {
              backgroundColor: 'rgb(255,236,237)',
              borderRight: '1vh solid rgb(251,151,161)',
            }
          : {}
      }
    >
      <p
        className={styles.tabName}
        style={props.selectedTab ? { color: 'rgb(251,151,161)' } : {}}
      >
        {props.tab}
      </p>
    </div>
  );
};

export default Tab;
