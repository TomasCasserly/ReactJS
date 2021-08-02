
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
  
export default function App() {
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h4>Proyecto Casserly</h4>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">
          <img
src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/goa-surf-center-premium-logo-design-template-caf283617783830505ef28cec3576f0b_screen.jpg?ts=1582895143"
            alt="Sample Brand Logo"
            width="35"
            className="align-top d-inline-block"
            height="35"
          />Casserly Co
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}