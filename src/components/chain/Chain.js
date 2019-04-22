import React, { Component, } from 'react';
import Block from '../block/Block';
const Crypto = require('crypto');

const createHash = (previousHash, data, timestamp, index) => {
  let nonce = 0;
  while (true) {
    let hash = Crypto.createHash('SHA256').update(timestamp+data+index+previousHash+nonce).digest('hex');
    if (hash.slice(0,4) === "0000") {
      return ([hash, nonce]);
    } else {
      nonce++;
    }
  }
}

const createBlock = (data, previousHash, index) => {
  let time = new Date();
  let hashResult = createHash(previousHash, data, index, time)
  return {
    data: data,
    previousHash: previousHash,
    time: time,
    nonce: hashResult[1],
    hash: hashResult[0],
    mined: true}
}

const genesisBlock = createBlock('Genesis block', '-1', 0);
genesisBlock['blockName'] = 'Genesis block';

class Chain extends Component {
  constructor() {
    super();
    this.state = {
      blockChain: [genesisBlock, ],
      data: ''
    };
  }

  onMine = (event) => {
    if (event.type === 'click' || (event.type === 'keydown' && event.key === 'Enter')) {
      let newBlock = createBlock(this.state.data, this.state.blockChain[this.state.blockChain.length-1].hash, this.state.blockChain.length);
      newBlock['blockName'] = 'Block ' + this.state.blockChain.length;
      let newBlockChain = this.state.blockChain;
      newBlockChain.push(newBlock);
      this.setState({blockChain: newBlockChain});
      this.setState({data: ''});
    }
  }

  onDataInputChange = (event) => {
    this.setState({data: event.target.value});
  }

  render() {
    return (
      <div className="container" style={{ width: 800 }}>
        {
          this.state.blockChain.map((block, i) =>
            <Block
              key={i}
              previousHash={this.state.blockChain[i].previousHash}
              blockName={this.state.blockChain[i].blockName}
              data={this.state.blockChain[i].data}
              time={this.state.blockChain[i].time}
              nonce={this.state.blockChain[i].nonce}
              hash={this.state.blockChain[i].hash}
              mined={this.state.blockChain[i].mined}
            />
          )
        }
        <Block data={this.state.data} blockName={'Block ' + this.state.blockChain.length} mine={this.onMine} dataInputChange={this.onDataInputChange}/>
      </div>
    );
  };
}

export default Chain;
