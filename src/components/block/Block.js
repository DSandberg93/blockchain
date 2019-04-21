import React from 'react';
import './Block.css';
import DataInput from './DataInput';

const Block = ({ previousHash, blockName, data, time, nonce, hash, mined, mine, dataInputChange }) => {
  return (
    <div className="card card-nav-tabs" style={{ marginTop: 50, pading: "auto 15" }}>
      <div className="card-header card-header-success header-style">{ blockName }</div>
      <div className="card-body">
        { mined ?
          <div>
            <div className="input-group" style={{ marginBottom: 10 }}>
              <span className="input-group-addon" style={{ paddingRight: 5, paddingTop: 5 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 12H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>
              </span>
              <p className="form-control content-style">{data}</p>
            </div>
            <div className="row row-style">
              <span className="label-style">Previous hash:</span>
              <p className="content-style">{previousHash}</p>
            </div>
            <div className="row row-style">
              <span className="label-style">Time:</span>
              <p className="content-style">{time.toISOString().slice(0,10)} {time.toISOString().slice(11,19)}</p>
            </div>
            <div className="row row-style">
              <span className="label-style">Nonce:</span>
              <p className="content-style">{nonce}</p>
            </div>
            <div className="row row-style">
              <span className="label-style">Hash:</span>
              <p className="content-style">{hash}</p>
            </div>
          </div>
        :
          <div>
            <div className="input-group">
              <span style={{ paddingRight: 5, paddingTop: 5 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 12H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>
              </span>
              <DataInput dataInputChange={dataInputChange}/>
            </div>
            <button className="btn btn-warning" style={{ float: "right" }} onClick={mine}>Mine data</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Block;
