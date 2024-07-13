import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country : "in",
    pageSize : 6,
    category : "general",
    type : " ",
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
    type : PropTypes.string,
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


  async updateNews(){
    let url = null;
    if( this.props.type !== " "){
      url = `https://newsapi.org/v2/everything?q=${this.props.type}&apiKey=9de6b61b30074ee4b3c243548bf8edc3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    }else{
      url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9de6b61b30074ee4b3c243548bf8edc3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    }
    this.setState({loading : true})
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ 
      articles: parseData.articles, 
      totalResults : parseData.totalResults,
      loading : false,
    })
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({ page : this.state.page - 1});
    this.updateNews();
  }

  handleNextClick = async () => {
    this.setState({ page : this.state.page + 1});
    this.updateNews();
  }


  render() {
    return (
      <div className='container my-3'>
        <h1 style={{ textAlign: 'center', margin:'30px', padding:'30px'}}>DailyNews - Top HeadLines</h1>
        {this.state.loading && <Spinner style={{ hight : '100vh',  }} />}
        <div className='row'>
          
          {!this.state.loading &&  (this.state.articles ? (this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url} >
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 90) : ""}
               imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date = {element.publishedAt} source = {element.source.name}/>
            </div>
          })
        ) : <p style={{textAlign : 'center' }}>No Item to Show</p>) }
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



