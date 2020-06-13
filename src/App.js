import React from 'react';
import { Header } from './components/Header';
import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import image from './images/COVID-19.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
    
        <Header />
      <h4>Alifya Hussain</h4>
        <img className={styles.image} src={image} alt="COVID-19" />
        <h3>Please Select Country Below</h3>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;