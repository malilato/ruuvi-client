import React from 'react';
import './DataChart.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries} from 'react-vis';

const DataChart = props => {
  var result = props.ruuviDataList.map(data => ({ x: (new Date(data.createdAt).getTime()), y: data.temperature }));
  return (
    <div className="dataChart">
    <XYPlot
      width={600}
      height={300}
      xType="time-utc">
      <VerticalGridLines/>
      <HorizontalGridLines/>
      <XAxis />
      <YAxis />
      <LineSeries
        curve={'curveBundle'}
        data={result}
        color="#7ccc63"
        />
    </XYPlot>
  </div>
  );
};

export default DataChart;
