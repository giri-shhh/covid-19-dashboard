import React from 'react';
import PropTypes from 'prop-types';
import NewsPalette from './news-palettte/NewsPalette';
import Hero from './hero/Hero';
import styles from './Dashboard.module.css'; 

function DashBoard(props) {
  return (
    <div className={styles.container}>
      <Hero />
      <NewsPalette />
    </div>
  );
}

DashBoard.propTypes = {};

export default DashBoard;