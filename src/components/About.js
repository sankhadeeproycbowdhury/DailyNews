import React, { useState } from "react";
import "../About.css";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import image from "../FlowChart.jpeg"

const initialContent = [
  {"title" : "Real-Time Monitoring & Dynamic Blocking", "description" : "Continuously checks each process and its network connections for security and blocks connections to flagged ports or IPs using iptables as per demand"},
  {"title":"Packet Capture", "description" : "Uses the pcap library to listen to all network traffic in and out of the system." },
  {"title" : "Web-Based Control" , "description" : " Offers a simple web interface for managing processes and network settings.This streamlined approach provides automated and intelligent network security management."},
  {"title" : "Tech Stack" , "description" : "Frontend: React.js, HTML, CSS, JavaScript, Bootstrap, Backend: Node.js, C++, Windows API,  Database: MongoDB, Networking: pcap library, iptables, Build Tools: CMake, Data Formats: JSON"},
];

const MORE_CONTENT = [
  {"title" : "Potential impact on the target audience" , "description" : "Enhanced Security Posture Improved Incident Detection and Response Protection against attacks while malicious software can be accessed Variable implementation of security policies"},
  {"title" : "Benefits of the solution", "description" : "Granular Control Over Network Access Centralized Management and Policy Deployment Real-Time Anomaly Detection and Alerting.Cross-Platform Compatibility User friendly UI to handle required settings" },
];

const About = (props) => {
  const [visibleComponents, setVisibleComponents] = useState(initialContent);
  const [count, setCount] = useState(initialContent.length);
  const fetch = () => {
    console.log(visibleComponents);
    let updateNews = initialContent.concat(MORE_CONTENT);
    setVisibleComponents(updateNews);
    setCount(updateNews.length);
    console.log(visibleComponents);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  document.title = `${capitalizeFirstLetter(props.category)} - InviSecure App`;

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "30px",
          paddingTop: "30px",
          color: "white",
        }}
      >
        About - InviSecure
      </h1>

      
      <InfiniteScroll
        dataLength={initialContent.length}
        next={fetch}
        hasMore={count < initialContent.length + MORE_CONTENT.length}
        loader={<Spinner />}
      >
        <div className="container my-1">
          {visibleComponents.map((item, index) => (
            <div
              key={index}
              className="item-box"
              style={{ border: "2px solid white" }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </InfiniteScroll>

<div className="container" style={{textAlign:'center', paddingBottom : '30px', marginBottom : '30px'}}>
      <img src={image}  alt="Description of the Project" style={{ width : '750px' }}  />
</div>
    </>
  );
};

export default About;
