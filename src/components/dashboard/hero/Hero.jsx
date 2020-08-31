import React from 'react';
import styles from './Hero.module.css';
import Cards from './Cards/Cards';
import CountryCard from './CountryCard/CountryCard';

const tabs = ['Dashbaord', 'Category', 'News', 'Test2', 'Test3'];

function Hero(props) {
  return (
    <div className={styles.container}>
      <Cards/>
      <CountryCard/>
    </div>
  );
}

export default Hero;
