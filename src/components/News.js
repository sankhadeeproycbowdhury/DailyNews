import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country : "in",
    pageSize : 6,
    category : "general",
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
  }

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
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9de6b61b30074ee4b3c243548bf8edc3&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ 
      articles: parseData.articles, 
      totalResults : parseData.totalResults,
      loading : false,
    })
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9de6b61b30074ee4b3c243548bf8edc3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ 
      page: this.state.page - 1, 
      articles: parseData.articles,
      loading : false,
    })
  }

  handleNextClick = async () => {
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9de6b61b30074ee4b3c243548bf8edc3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ 
      page: this.state.page + 1, 
      articles: parseData.articles,
      loading : false,
    })
  }
  }


  render() {
    return (
      <div className='container my-3'>
        <h1 style={{ textAlign: 'center', margin:'30px', padding:'30px'}}>DailyNews - Top HeadLines</h1>
        {this.state.loading && <Spinner style={{ hight : '100vh',  }} />}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url} >
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 90) : ""}
               imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date = {element.publishedAt} source = {element.source.name}/>
            </div>
          })}
        </div>
        <div className='container my-2 d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-info mx-2" onClick={this.handlePrevClick} >&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-info mx-2" onClick={this.handleNextClick} >Next &rarr;</button>
        </div>
      </div>
    )
  }
}


export default News



