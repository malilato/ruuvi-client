import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataCard from './DataCard';
import DataChart from './DataChart';
import DataChartRes from './DataChartRes';

const API = 'http://tonimalila.fi/api/ruuvis/findLatest';
const APILIST = 'http://tonimalila.fi/api/ruuvis/findLastDay';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ruuviData: [],
      temperatureData: [],
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

  changeChartData(event, dataKey){
    var data = this.state.temperatureData;
    if(dataKey === 'temperature')
    {
      data = this.state.ruuviDataList.map(data => ({ x: (new Date(data.createdAt).getTime()), y: data.temperature }));
    }
    else if(dataKey === 'humidity')
    {
      data = this.state.ruuviDataList.map(data => ({ x: (new Date(data.createdAt).getTime()), y: data.humidity }));
    }
    else if(dataKey === 'pressure')
    {
      data = this.state.ruuviDataList.map(data => ({ x: (new Date(data.createdAt).getTime()), y: data.pressure }));
    }
    this.setState({temperatureData: data})
  }

  render() {
    const { ruuviData } = this.state;
    var temperatureData = this.state.temperatureData;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ruuvi dashboard</h1>
        </header>
        <div className="container">

          <div className="row">

            <div className="col-md-4" onClick={e => this.changeChartData(e, 'temperature')}>
              <DataCard name="Temperature" value={ruuviData.temperature} faName="fa-thermometer-full" cardColor="greenBg" createdAt={ruuviData.createdAt}/>
            </div>

            <div className="col-md-4" onClick={e => this.changeChartData(e, 'humidity')}>
              <DataCard name="Humidity" value={ruuviData.humidity} faName="fa-tint" cardColor="blueBg" createdAt={ruuviData.createdAt}/>
            </div>

            <div className="col-md-4" onClick={e => this.changeChartData(e, 'pressure')}>
              <DataCard name="Pressure" value={ruuviData.pressure} faName="fa-cloud" cardColor="orangeBg" createdAt={ruuviData.createdAt}/>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              {/* <DataChart ruuviDataList={this.state.ruuviDataList}/> */}
              <DataChartRes ruuviDataList={temperatureData} lineColor={"#7ccc63"}/>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
