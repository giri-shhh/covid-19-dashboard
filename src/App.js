import React, { Component } from 'react';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import Dashboard from './components/dashboard/DashBoard';
import styles from './App.module.css'
class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.sideContainer}>
          <SideBar />
        </div>
        <div className={styles.dashContainer}>
          <Header />
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
