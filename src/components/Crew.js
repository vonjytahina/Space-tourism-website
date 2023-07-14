import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import JsonData from "../assets/data/data.json";

function Crew() {
  const [crewChoice, setCrewChoice] = useState("Douglas Hurley");
  const [datas, setDatas] = useState(JsonData);
  return (
    <div className="container-crew">
      <Header active="crew" />
      <div className="mobile-crew-title">
        <p>
          <span>02</span>Meet your crew
        </p>
      </div>
      {datas.crew.map((data, index) => {
        if (data.name === crewChoice) {
          return (
            <main className="main-crew" key={index}>
              <div className="left">
                <div className="crew-title">
                  <p>
                    <span>02</span>Meet your crew
                  </p>
                </div>
                <div className="crew-detail">
                  <h4>{data.role}</h4>
                  <h3>{data.name}</h3>
                  <p>{data.bio}</p>
                </div>
                <div className="crew-navigation">
                  <ul>
                    <li>
                      <Link
                        className={
                          crewChoice === "Douglas Hurley" ? "active" : ""
                        }
                        to="/crew"
                        onClick={() => setCrewChoice("Douglas Hurley")}
                      ></Link>
                    </li>
                    <li>
                      <Link
                        className={
                          crewChoice === "Mark Shuttleworth" ? "active" : ""
                        }
                        to="/crew"
                        onClick={() => setCrewChoice("Mark Shuttleworth")}
                      ></Link>
                    </li>
                    <li>
                      <Link
                        className={
                          crewChoice === "Victor Glover" ? "active" : ""
                        }
                        to="/crew"
                        onClick={() => setCrewChoice("Victor Glover")}
                      ></Link>
                    </li>
                    <li>
                      <Link
                        className={
                          crewChoice === "Anousheh Ansari" ? "active" : ""
                        }
                        to="/crew"
                        onClick={() => setCrewChoice("Anousheh Ansari")}
                      ></Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="right">
                <img
                  src={require(`../assets/images/crew/${data.images.png}`)}
                />
              </div>
            </main>
          );
        }
      })}
    </div>
  );
}

export default Crew;
