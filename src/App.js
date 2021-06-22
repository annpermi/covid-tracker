import React, { Component } from 'react';
import './App.css';
import styles from './App.modules.css';

import { Cards, Chart, CountryPicker } from './components';
class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
