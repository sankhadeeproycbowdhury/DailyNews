import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { source_mac, destination_mac, source_ip, destination_ip, source_port, destination_port, application } = this.props;

    return (
      <div className="container my-3">
        <div className="card" style={{width: '500px', height : '300px'}} >
        <div style={ {
          display : 'flex',
          justifyContent : 'flex-end',
          position : 'absolute',
          right : '0',
        } }>
        <span className="badge rounded-pill bg-danger"> {application} </span>
        </div>
          <div className="card-body">
            <h5 className="card-title">
              SourceIP : {source_ip}  DestinationIP : {destination_ip}
            </h5>
            <p className="card-text">SourceMAC : {source_mac}</p>
            <p className="card-text">DestinationMAC : {destination_mac}</p>
            <p className="card-text">SourcePort : {source_port}</p>
            <p className="card-text">DestinationPort : {destination_port}</p>
            <p className="card-text">
              <small className=" text-danger">
                By {!application ? "Unknown" : application} on :{" "}
                {new Date().toGMTString()}
              </small>
            </p>
            <button
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-info mx-2"
            >
              Block
            </button>
            <button
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-info mx-2"
            >
              Unblock
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;