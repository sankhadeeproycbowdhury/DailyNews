import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from './Spinner';
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
    type: " ",
    setProgress: (p) =>{
    },
    apiKey : ""
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    type: PropTypes.string,
    setProgress: PropTypes.func,
    apiKey: PropTypes.string,
  };

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - InviSecure App`;
  }

  async updateNews() {
    this.props.setProgress(10);
    let url = null;
    if (this.props.type !== " ") {
      url = `https://newsapi.org/v2/everything?q=${this.props.type}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    }
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }


  fetchMoreData = async () => {
    let url = null ;
    if (this.props.type !== " ") {
      url = `https://newsapi.org/v2/everything?q=${this.props.type}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    }
    this.setState({ page : this.state.page + 1 });
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false,
    });
  }
  

  render() {
    if(!this.state.articles){
      return(
        <div className="container my-3">
          <h1 style={{ textAlign: "center", margin: "30px", padding: "30px" }}>
          DailyNews - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          HeadLines
        </h1>
          <div className="row">
            <p style={{ textAlign: "center", color:"white" }}>No Item to Show</p>
          </div>
        </div>
      )
    }

    return (
      <>
        <h1 style={{ textAlign: "center", marginTop: "30px", paddingTop: "30px",  color:"white" }}>
        InviSecure - DashBoard
        </h1>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
                return (
                  <div className="col-md-6" key={element.url}>
                    <NewsItem
                    source_mac={"7af74ddfb5b9"}
                    destination_mac = {"3003c8692261"}
                    source_ip = {"192.168.1.7"}
                    destination_ip={" 224.0.0.251"}
                    source_port={5353}
                    destination_port={5353}
                    application={"Brave"}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        </InfiniteScroll>
        <span>
            {" "}
            {this.state.page} /{" "}
            {Math.ceil(this.state.totalResults / this.props.pageSize)}{" "}
          </span>
      </>
    );
  }
}

export default News;
