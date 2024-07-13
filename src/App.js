import './App.css';

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      sharedValue: '',
    };
  }
  
  handleValueChange = (newValue) => {
    this.setState({ sharedValue: newValue });
    console.log(this.state.sharedValue);
  };
  
  pageSize = 9;
  render() {
    return (
      <div>
        <Router>
        <NavBar value={this.state.sharedValue} onValueChange={this.handleValueChange} ></NavBar>
          <Routes>
          <Route exact path="/" element={<News pageSize = {this.pageSize} key="home" />} /> 
          <Route exact path="/general" element={<News pageSize = {this.pageSize} category = "general" key="general"/>} />
          <Route exact path="/business" element={<News pageSize = {this.pageSize} category = "business"  key="business" />} />
          <Route exact path="/entertainment" element={< News pageSize = {this.pageSize} category = "entertainment" key="entertainment" />} />
          <Route exact path="/health" element={<News pageSize = {this.pageSize} category = "health" key="health" />} />
          <Route exact path="/science" element={<News pageSize = {this.pageSize} category = "science" key="science"  />} />
          <Route exact path="/sports" element={<News pageSize = {this.pageSize} category = "sports" key="sports" />} />
          <Route exact path="/technology" element={<News pageSize = {this.pageSize} category = "technology" key="technology" />} />
          <Route exact path="/search" element={<News pageSize = {this.pageSize} type = {this.state.sharedValue} key={this.state.sharedValue}/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

