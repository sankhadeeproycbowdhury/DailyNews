import './App.css';

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import About from './components/About';
import Future from './components/Future';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      sharedValue: '',
      progress:0,
    };
  }
  
  handleValueChange = (newValue) => {
    this.setState({ sharedValue: newValue });
  };
  
  setProgress = (progress) => {
    this.setState({ progress : progress })
  }
  
  apiKey = process.env.REACT_APP_NEWS_API;
  pageSize = 4;
  render() {
    return (
      <div>
        <Router>
        <NavBar value={this.state.sharedValue} onValueChange={this.handleValueChange} ></NavBar>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />
          <Routes>
          <Route exact path="/" element={<News  setProgress = {this.setProgress} apiKey = {this.apiKey}  pageSize = {this.pageSize} key="home" />} /> 
          <Route exact path="/about" element={<About pageSize={3} category = "About" />} /> 
          <Route exact path="/future" element={<Future pageSize={3} category = "Future"/> } /> 
          <Route exact path="/general" element={<News  setProgress = {this.setProgress} apiKey = {this.apiKey}  pageSize = {this.pageSize} category = "general" key="general"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

