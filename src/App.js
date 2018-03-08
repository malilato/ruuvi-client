import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataCard from './DataCard';
import DataChart from './DataChart';

const API = 'http://tonimalila.fi/api/ruuvis/findLatest';
const APILIST = 'http://tonimalila.fi/api/ruuvis/findLastDay';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ruuviData: [],
      ruuviDataList: []
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ ruuviData: data }));
      fetch(APILIST)
        .then(response => response.json())
        .then(data => this.setState({ ruuviDataList: data }));
  }

  render() {
    const { ruuviData } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ruuvi dashboard</h1>
        </header>
        <div className="container">

          <div className="row">

            <div className="col-md-4">
              <DataCard name="Temperature" value={ruuviData.temperature} faName="fa-thermometer-full" cardColor="greenBg" createdAt={ruuviData.createdAt}/>
            </div>

            <div className="col-md-4">
              <DataCard name="Humidity" value={ruuviData.humidity} faName="fa-tint" cardColor="blueBg" createdAt={ruuviData.createdAt}/>
            </div>

            <div className="col-md-4">
              <DataCard name="Pressure" value={ruuviData.pressure} faName="fa-cloud" cardColor="orangeBg" createdAt={ruuviData.createdAt}/>
            </div>

          </div>

          <div className="cold-md-12">
            <DataChart ruuviDataList={this.state.ruuviDataList}/>
          </div>

        </div>



      </div>
    );
  }
}

export default App;
