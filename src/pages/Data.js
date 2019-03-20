import React, { Component } from 'react';
import MyTable from '../components/myTable.js';
import MyCalculator from '../components/myCalculator.js';

class Data extends Component{
  render(){
    return(
      <React.Fragment>
        <MyTable/>
        <MyCalculator/>
      </React.Fragment>
    )
  }
}

export default Data;