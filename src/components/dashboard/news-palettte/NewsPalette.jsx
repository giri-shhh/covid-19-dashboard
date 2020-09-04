import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewsPalette.module.css';

const news = [
  {
    image: '../../../images/news-banner.jpg',
    headline: '',
    source: '',
    time: '',
  },
  {
    image: '../../../images/news-banner.jpg',
    headline: '',
    source: '',
    time: '',
  },
];
function NewsPalette(props) {
  return (
    <div className={styles.container}>
      <div className={styles.newsMainCard}>
        <div className={styles.newsHeaderMain}>
          <div className={styles.newsHeader}>
            <h5>News</h5>
          </div>
          <div className={styles.country}>
            <h6>Worldwide</h6>
            <select defaultValue={''}>
              <option value={'India'} selected>
                India
              </option>
            </select>
          </div>
        </div>
        <div className={styles.newsBody}>
          {news.map((news) => (
            <div className={styles.newsCardMain}>
              <img
                className={styles.newsBanner}
                src={require('../../../images/news-banner.jpg')}
              ></img>
              <div className={styles.newsContent}>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                  similique dolor magnam illo{' '}
                </p>
                <div className={styles.source}>
                  <h5>TIMES OF INDIA</h5>
                  <p>32 mins ago</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}

NewsPalette.propTypes = {};

export default NewsPalette;
