import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';

const { Header } = Layout;

class myHeader extends Component{
  render(){
    return (
      <Header>
        <h2 style={{textAlign: 'center'}}>
          <b style={{color: 'yellow'}}><i>Тест на знание истории</i></b>
        </h2>     
      </Header>
    );
  }
}

const initMapStateToProps = (state) => ({
  data: state.dataload,
});

const connection = connect(initMapStateToProps,undefined)(myHeader);
export default connection;