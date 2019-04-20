import React from 'react';
import './Block.css'

const DataInput = ({dataInputChange}) => {
  return (
    <input type="text" placeholder="Input data" className="form-control content-style" onChange={dataInputChange}/>
  );
};

export default DataInput;
