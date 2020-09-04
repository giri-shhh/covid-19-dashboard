import React from 'react';
import Card from './Card/Card';
import styles from './Cards.module.css';

const cards = [
  {
    name: 'Confirmed Cases',
    primaryColor: 'rgb(239, 230,255)',
    secondaryColor: 'rgb(189,155,254)',
  },
  {
    name: 'Active Cases',
    primaryColor: 'rgb(255,244,222)',
    secondaryColor: 'rgb(255,175,26)',
  },
  {
    name: 'Recovered Cases',
    primaryColor: 'rgb(201,247,245)',
    secondaryColor: 'rgb(21,196,187)',
  },
  {
    name: 'Deaths',
    primaryColor: 'rgb(255,226,229)',
    secondaryColor: 'rgb(246,72,90)',
  },
];

const Cards = () => {
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <Card
          name={card.name}
          primaryColor={card.primaryColor}
          secondaryColor={card.secondaryColor}
        />
      ))}
    </div>
  );
};

export default Cards;
