import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: props.primaryColor }}
    >
      <h5 style={{ color: props.secondaryColor }}>
        {props.name}
      </h5>
      <h5 className={styles.count} style={{ color: props.secondaryColor }}>
        120,405,221
      </h5>
    </div>
  );
};

export default Card;
