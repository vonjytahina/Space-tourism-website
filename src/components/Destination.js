import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import JsonData from "../assets/data/data.json";

function Destination() {
  const [destinationChoice, setDestinationChoice] = useState("Moon");
  const [datas, setDatas] = useState(JsonData);
  return (
    <div className="container-destination">
      <Header active="destination" />
      <div className="destination-title">
        <p>
          <span>01</span>pick your destination
        </p>
      </div>
      {datas.destinations.map((data, index) => {
        if (data.name == destinationChoice) {
          return (
            <main className="main-destination" key={index}>
              <div className="left">
                <img src={require(`../assets/images/destination/${data.images.png}`)} width="445" height="445" />
              </div>
              <div className="right">
                <div className="destination-menu">
                  <ul>
                    <li className={destinationChoice === "Moon" ? "active" : ""}>
                      <Link
                        to="/destination"
                        onClick={() => setDestinationChoice("Moon")}
                      >
                        moon
                      </Link>
                    </li>
                    <li className={destinationChoice === "Mars" ? "active" : ""}>
                      <Link
                        to="/destination"
                        onClick={() => setDestinationChoice("Mars")}
                      >
                        mars
                      </Link>
                    </li>
                    <li className={destinationChoice === "Europa" ? "active" : ""}>
                      <Link
                        to="/destination"
                        onClick={() => setDestinationChoice("Europa")}
                      >
                        europa
                      </Link>
                    </li>
                    <li className={destinationChoice === "Titan" ? "active" : ""}>
                      <Link
                        to="/destination"
                        onClick={() => setDestinationChoice("Titan")}
                      >
                        titan
                      </Link>
                    </li>
                  </ul>
                </div>

                <div></div>
                <h2>{data.name}</h2>
                <p>{data.description}</p>
                <div className="separator"></div>
                <div className="destination-info">
                  <div className="avg-distance">
                    <h4>avg. distance</h4>
                    <h3>{data.distance}</h3>
                  </div>
                  <div className="travel-time">
                    <h4>est. travel time</h4>
                    <h3>{data.travel}</h3>
                  </div>
                </div>
              </div>
            </main>
          );
        }
      })}
    </div>
  );
}

export default Destination;
