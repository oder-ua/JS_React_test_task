import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import MyFooter from './components/myFooter.js';
import MyHeader from './components/myHeader.js';
import { Route } from "react-router-dom";
import Home from './pages/Home';
import Data from './pages/Data';


class App extends Component {
  
  render() {
  
    return (
      <Layout className="layout">
        <MyHeader/>
        <Route exact path="/" component={Home} />
        <Route exact path="/data" component={Data} />
        <MyFooter/>
      </Layout>
    );
  }
}

export default App;