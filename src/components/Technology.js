import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import JsonData from "../assets/data/data.json";

function Technology() {
  const [technologyChoice, setTechnologyChoice] = useState("Launch vehicle");
  const [datas, setDatas] = useState(JsonData);
  return (
    <div className="container-technology">
      <Header active="technology" />
      <div className="technology-title">
        <p>
          <span>03</span>space launch 101
        </p>
      </div>
      {datas.technology.map((data, index) => {
        if (data.name === technologyChoice) {
          return (
            <main className="main-technology" key={index}>
              <div className="left">
                <div className="technology-menu">
                  <ul>
                    <li>
                      <Link
                        className={
                          technologyChoice === "Launch vehicle" ? "active" : ""
                        }
                        to="/technology"
                        onClick={() => setTechnologyChoice("Launch vehicle")}
                      >
                        1
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          technologyChoice === "Spaceport" ? "active" : ""
                        }
                        to="/technology"
                        onClick={() => setTechnologyChoice("Spaceport")}
                      >
                        2
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          technologyChoice === "Space capsule" ? "active" : ""
                        }
                        to="/technology"
                        onClick={() => setTechnologyChoice("Space capsule")}
                      >
                        3
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="technology-detail">
                  <h5>The terminology...</h5>
                  <h3>{data.name}</h3>
                  <p>{data.description}</p>
                </div>
              </div>
              <div className="right">
                <img
                  src={require(`../assets/images/technology/${data.images.portrait}`)}
                  width="515"
                  height="527"
                  className="technology-img-portait"
                />
                <img
                  src={require(`../assets/images/technology/${data.images.landscape}`)}
                  width="772"
                  height="310"
                  className="technology-img-landscape"
                />
              </div>
            </main>
          );
        }
      })}
    </div>
  );
}

export default Technology;
