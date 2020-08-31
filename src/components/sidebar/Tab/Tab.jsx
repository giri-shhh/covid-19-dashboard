import React from 'react';
import styles from './Tab.module.css';

const Tab = (props) => {
  return (
    <div className={styles.container}>
      <p className={styles.tabName}>{props.tab}</p>
    </div>
  );
};

export default Tab;
