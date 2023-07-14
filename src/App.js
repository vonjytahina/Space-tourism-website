import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

function App() {
  return (
    <BrowserRouter> 
      <>
        <Routes>
          <Route path="/" element={<Home />} />       
          <Route path="/destination" element={<Destination />} />       
          <Route path="/crew" element={<Crew />} />       
          <Route path="/technology" element={<Technology/>} />       
        </Routes>
        <div class="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href="https://www.frontendmentor.io/profile/vonjytahina"
              target="_blank"
            >
              Vonjy Tahina CHAN
            </a>
            .
          </div>
      </>
    </BrowserRouter>
  );
}

export default App;

