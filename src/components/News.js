import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    this.state = {
       articles : [],
       loading : false,
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9de6b61b30074ee4b3c243548bf8edc3";
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({articles : parseData.articles})
  }

  render() {
    return (
      <div className='container my-3'>
        <h3 style={{ textAlign: 'center' }}>DailyNews - Top HeadLines</h3>
        <div className='row'>
          {this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url} >
            <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0,90):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div> 
          })}
        </div>
      </div>
    )
  }
}


export default News





