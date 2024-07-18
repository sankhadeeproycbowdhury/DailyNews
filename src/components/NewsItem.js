import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

    return (
      <div className="container my-3">
        <div className="card">
        <div style={ {
          display : 'flex',
          justifyContent : 'flex-end',
          position : 'absolute',
          right : '0'
        } }>
        <span className="badge rounded-pill bg-danger"> {source} </span>
        </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className=" text-danger">
                By {!author ? "Unknown" : author} on :{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-info"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;