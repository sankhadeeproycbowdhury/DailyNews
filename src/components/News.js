import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults : 0,
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9de6b61b30074ee4b3c243548bf8edc3&page=1&pageSize=20";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ 
      articles: parseData.articles, 
      totalResults : parseData.totalResults,
    })
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9de6b61b30074ee4b3c243548bf8edc3&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ 
      page: this.state.page - 1, 
      articles: parseData.articles,
    })
  }

  handleNextClick = async () => {
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9de6b61b30074ee4b3c243548bf8edc3&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ 
      page: this.state.page + 1, 
      articles: parseData.articles
    })
  }
  }


  render() {
    return (
      <div className='container my-3'>
        <h3 style={{ textAlign: 'center' }}>DailyNews - Top HeadLines</h3>
        <div className='row'>
          {this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url} >
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className='container my-2 d-flex justify-content-between'>
          <button type="button" className="btn btn-info mx-2" onClick={this.handlePrevClick} >&larr; Previous</button>
          <button type="button" className="btn btn-info mx-2" onClick={this.handleNextClick} >Next &rarr;</button>
        </div>
      </div>
    )
  }
}


export default News




// disabled={this.page.state <= 1}
