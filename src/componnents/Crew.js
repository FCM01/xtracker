import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useState, useEffect } from "react";

const Crew = () => {
  const [crew, setCrew] = useState({ number: 0, data: [] });

  useEffect(() => {
    fetch("http://localhost:8000/get/all/crew")
      .then((res) => res.json())
      .then((data) => setCrew(data));
  }, []);
  return (
    <div className="list">
      <div
      className="card-container"
      >
        {crew.data.map((c) => (
          <div>
            <Card style={{ width: "20rem" }}>
              {/* <Card.Img variant="top"  /> */}
              <div
                style={{
                  background: `url(${c.image})`,
                  height: "15em",
                  width: "100%",
                  "background-repeat": "no-repeat",
                  "background-size": "cover"
                }}
              ></div>
              <Card.Body>
                <Card.Title>{c.name}</Card.Title>
                <Card.Text>Agency{c.agency}</Card.Text>
                <Button variant="primary" href={c.wikipedia}>More information</Button>
              </Card.Body>
            </Card>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crew;
