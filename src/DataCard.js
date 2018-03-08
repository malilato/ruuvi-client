import React from 'react';
import './DataCard.css';

const DataCard = props => {
  var createdDate = new Date(props.createdAt);
  return (
    <div className={`dataCard ${ props.cardColor } `}>
      <i className={`fa fa-3x ${ props.faName } `}></i>
      <p className="cardValue">{props.value}</p>
      <p className="small">{createdDate.toTimeString()}</p>
    </div>
  );
};

export default DataCard;
