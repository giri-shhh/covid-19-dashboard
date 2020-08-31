import React from 'react';
import Card from './Card/Card';
import styles from './Cards.module.css';

const cards = [
  { name: 'Confirmed Cases', color: 'white' },
  { name: 'Active Cases', color: 'black' },
  { name: 'Recovered Cases', color: 'green' },
  { name: 'Deaths', color: 'red' },
];

const Cards = () => {
  return (
    <div className={styles.container}>
      <Card name={cards[0]} />
      <Card name={cards[1]} />
      <Card name={cards[2]} />
      <Card name={cards[3]} />
    </div>
  );
};

export default Cards;
