import React, { useState } from "react";
import "../About.css";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const initialContent = [
    {"title" : "Deep Application Layer Inspection", "description" : " Introducing deep packet inspection (DPI) at the application layer for a more granular control of network access. This enables the firewall to filter traffic not only by IPs and ports but also by the specific content within the data packets, providing robust application-level security."},
    {"title":"Optimized Backend for Faster Response", "description" : "Improving backend infrastructure to ensure quicker processing of network events, lower latency in applying security policies, and faster real-time anomaly detection. This enhancement will significantly boost performance, making the firewall more efficient during high-traffic periods." },
    {"title" : "Enhanced Frontend for User Experience" , "description" : "Making the frontend interface more interactive and user-friendly, allowing administrators to manage security settings, monitor network behavior, and respond to alerts with greater ease. A more intuitive UI will reduce the learning curve and increase productivity."},
  ];
  
  const MORE_CONTENT = [
    {"title" : "Quantum-Resilient Encryption" , "description" : " Future-proofing the firewall by integrating quantum-resilient encryption methods, ensuring secure communication channels even in the face of advancing quantum computing technology."},
    {"title" : "Cross-Platform and Cross-Network Integration", "description" : " Expanding compatibility across various operating systems and network environments. The firewall will seamlessly integrate with different platforms, ensuring comprehensive security for diverse network architectures." },
  ];

const Future = (props) => {
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
        Future Scope 
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
    </>
  );
};

export default Future;
