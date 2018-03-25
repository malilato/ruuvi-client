import React from 'react';
import './DataChart.css';
import {FlexibleWidthXYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries} from 'react-vis';

const DataChart = props => {
//   var result = props.ruuviDataList.map(data => ({ x: (new Date(data.createdAt).getTime()), y: data.temperature }));
  return (
    <div className="dataChart">
    <FlexibleWidthXYPlot
      height={300}
      xType="time-utc">
      <VerticalGridLines/>
      <HorizontalGridLines/>
      <XAxis />
      <YAxis />
      <LineSeries
        curve={'curveBundle'}
        data={props.ruuviDataList}
        color={props.lineColor}
        />
    </FlexibleWidthXYPlot>
  </div>
  );
};

export default DataChart;
