import './App.css';

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

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
  pageSize = 9;
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
          <Route exact path="/general" element={<News  setProgress = {this.setProgress} apiKey = {this.apiKey}  pageSize = {this.pageSize} category = "general" key="general"/>} />
          <Route exact path="/business" element={<News  setProgress = {this.setProgress} apiKey = {this.apiKey}  pageSize = {this.pageSize} category = "business"  key="business" />} />
          <Route exact path="/entertainment" element={< News pageSize = {this.pageSize} category = "entertainment" key="entertainment" />} />
          <Route exact path="/health" element={<News  setProgress = {this.setProgress} apiKey = {this.apiKey}  pageSize = {this.pageSize} category = "health" key="health" />} />
          <Route exact path="/science" element={<News  setProgress = {this.setProgress} apiKey = {this.apiKey}  pageSize = {this.pageSize} category = "science" key="science"  />} />
          <Route exact path="/sports" element={<News  setProgress = {this.setProgress} apiKey = {this.apiKey}  pageSize = {this.pageSize} category = "sports" key="sports" />} />
          <Route exact path="/technology" element={<News  setProgress = {this.setProgress} apiKey = {this.apiKey}  pageSize = {this.pageSize} category = "technology" key="technology" />} />
          <Route exact path="/search" element={<News  setProgress = {this.setProgress} apiKey = {this.apiKey}  pageSize = {this.pageSize} type = {this.state.sharedValue}
           key={this.state.sharedValue}  category =  {this.state.sharedValue}/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

