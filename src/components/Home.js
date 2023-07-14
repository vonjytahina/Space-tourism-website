import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Home() {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container">
      <Header active="home" />
      <main className="main-home">
        <div className="left">
          <h4>So, you want to travel to</h4>
          <h1>space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="right">
          <div
            className="circle-explore"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            onClick={() => navigate("/destination")}
          >
            Explore
          </div>
          <div
            className={`circle-explore-2 ${
              hover
                ? "circle-explore-2-animation"
                : "circle-explore-2-animation-inverse"
            }`}
          ></div>
        </div>
      </main>
    </div>
  );
}

export default Home;
