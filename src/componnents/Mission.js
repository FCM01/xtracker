import React from "react";
import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Table from 'react-bootstrap/Table';


const Mission = () => {
  const [launch, setLaunch] = useState({});
  useEffect(()=>{
    fetch("http://localhost:8000/get/latest")
    .then((res) => res.json())
    .then((data) =>setLaunch(data));
  }, [])
  const [crew, setCrew] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/getcrew")
      .then((res) => res.json())
      .then((data) => setCrew(data.data));
  });

  
  return (
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
       <th>Crew</th>
        <th>Misson information</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      
      <tr><div>
          {crew.map((c) => (
            <ListGroup>
              <ListGroup.Item>{c.role}</ListGroup.Item>
            </ListGroup>
          ))}
        </div></tr>
      <td>
        <div>
            <Card style={{ width: "20rem" }}>
              
              <Card.Img variant="top" src={launch.links.patch.small}/>

              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text></Card.Text>
                <Button variant="primary" href={launch.links.wikipedia} >More information</Button>
              </Card.Body>
            </Card>
          </div>
      </td>

      
      </tr>
      
    </tbody>
    </Table>
    
  );
};

export default Mission;
