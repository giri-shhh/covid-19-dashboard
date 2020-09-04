import React from 'react';
import styles from './CountryCard.module.css';

const stats = [
  {
    key: 'Country:',
    value: 'India',
  },
  {
    key: 'Confirmed Cases:',
    value: '12,445',
  },
  {
    key: 'New Cases:',
    value: '123,444,212',
  },
  {
    key: 'Active Cases:',
    value: '23,422',
  },
  {
    key: 'Deaths:',
    value: '23,000',
  },
  {
    key: 'Critical Cases:',
    value: '23,000',
  },
  {
    key: 'Recovered:',
    value: '23,000',
  },
  {
    key: 'Death Rate',
    value: '23,000',
  },
  {
    key: 'Recovery Rate',
    value: '23,000',
  },
  {
    key: 'Recovery Ratio',
    value: '23,000',
  },
  {
    key: 'Tests Performed',
    value: '23,000',
  },
];

const mapButtons = [
  {
    key: 'Severly Affected',
    primaryColor: 'rgb(246,84,101)',
    secondaryColor: 'rgb(253,215,221)',
  },
  {
    key: 'Mostly Affected',
    primaryColor: 'rgb(250,133,108)',
    secondaryColor: 'rgb(252,231,226)',
  },
  {
    key: 'Averegly Affected',
    primaryColor: 'rgb(255,198,91)',
    secondaryColor: 'rgb(253,246,230)',
  },
  {
    key: 'Less Affected',
    primaryColor: 'rgb(21,196,187)',
    secondaryColor: 'rgb(191,238,236)',
  },
];
const CountryCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mapViewMain}>
        <div className={styles.search}>
          <h5>Cases by Country</h5>
          <div>
            <input
              className={styles.searchCountry}
              type={'text'}
              placeholder={'Search Country'}
            ></input>
          </div>
        </div>
        <div className={styles.mapButtonMain}>
          {mapButtons.map((but) => (
            <div
              className={styles.mapButton}
              style={{
                backgroundColor: but.secondaryColor,
                color: but.primaryColor,
              }}
            >
              {but.key}
            </div>
          ))}
        </div>
        <div className={styles.map}>Maps</div>
      </div>
      <div className={styles.overView}>
        <h4>Overview</h4>
        <div className={styles.overViewContent}>
          {stats.map((stat) => (
            <div className={styles.statView}>
              <h5>{stat.key}</h5>
              <h5>{stat.value}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CountryCard;
