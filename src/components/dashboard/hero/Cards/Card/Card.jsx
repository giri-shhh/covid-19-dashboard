import React from 'react';
import styles from './Card.module.css';

const Card = ({ name: { name, color } }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <p className={styles.heading}>{name}</p>
      <p className={styles.count}>120,405,221</p>
    </div>
  );
};

export default Card;
