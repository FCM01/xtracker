import { useState } from "react";

import Mission from "./componnents/Mission.js";
import Crew from "./componnents/Crew.js";
import Image from "react-bootstrap/Image";
import Navmain from "./componnents/Navmain.js";

import badge from "./images/badge.jpg";
import image1 from "./images/pexels-pixabay-2159.jpg";
import image2 from "./images/pexels-icliff-agendia-12861276.jpg";
import Carousel from "react-bootstrap/Carousel";

import "./App.css";

function App() {
  // const [nav,changeCrew] = useState({
  //   "home":true,
  //   "crew":false,
  //   "mission":false,
  //   "rocket":false
  // })
  return (
    <div className="App">
      <Navmain></Navmain>
      <body>
        <Carousel>
          <Carousel.Item>
            <img
              style={{ height: 700 }}
              className="d-block  w-100 "
              src={badge}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: 700 }}
              className="d-block w-100 "
              src={image1}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: 700 }}
              className="d-block w-100 "
              src={image2}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="container">
          <Mission></Mission>
          <Crew></Crew>
        </div>
        <script type="module" src="./js/main.js"></script>
      </body>
    </div>
  );
}

export default App;
