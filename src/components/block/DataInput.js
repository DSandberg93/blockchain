import React from 'react';
import './Block.css'


const DataInput = ({mine, data, dataInputChange, keyDown}) => {

  return (
    <input type="text" placeholder="Input data" className="form-control content-style" onChange={dataInputChange} value={data} onKeyDown={mine}/>
  );
};

export default DataInput;
