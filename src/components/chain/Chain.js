import React, { Component, } from 'react';
import Block from '../block/Block';

class Chain extends Component {
  constructor() {
    super();
    this.state = {
      blockChain: [],
      currentBlock: {
        blockName: '',
        data: '',
        previousHash: '',
        time: '',
        nonce: 0,
        hash: ''
      }
    };
  };

  onMine = (event) => {
    console.log(event)
  }

  onDataInputChange = (event) => {
    let cBlock = this.state.currentBlock;
    cBlock.data = event.target.value;
    this.setState({cBlock});
    console.log(this.state.currentBlock.data);
  }

  render() {
    return (
      <div className="container" style={{ width: 800 }}>
        <Block perviousHash={"Some hash"} blockName={'Genesis block'} mine={this.onMine} dataInputChange={this.onDataInputChange}/>
      </div>
    );
  };
}

export default Chain;
