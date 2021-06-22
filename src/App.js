import React, { Component } from 'react';
import styles from './App.modules.css';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
class App extends Component {
  state = {
    data: {},
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData})
  }

  render() {
    const { data } = this.state;
    return (
      <div className='container'>
        <Cards data={data}/>
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
