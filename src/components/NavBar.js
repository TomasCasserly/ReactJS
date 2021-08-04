
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
  
export default function NavBar() {
  return (
    <div style={{ display: 'inline-block', width: 1500, padding: 30 }}>
      <h1>Bienvenido a Proyecto Casserly</h1>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">
          <img
src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/goa-surf-center-premium-logo-design-template-caf283617783830505ef28cec3576f0b_screen.jpg?ts=1582895143"
            alt="Sample Brand Logo"
            width="200"
            className="align-top d-inline-block"
            height="200"
          />Home
        </Navbar.Brand>
        <div style={{display: "flex", marginLeft: "auto"}}><CartWidget/></div>
      </Navbar>
      
    </div>
  );
}