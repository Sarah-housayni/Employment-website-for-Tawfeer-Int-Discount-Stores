import React from "react";
import { Navbar,Nav,Container} from "react-bootstrap";
import './navbar.css'
import logot from  '../../assets/logo2.png'
import dd from '../../assets/download.jpg'

 const Navs = () => {
  return (
    <Navbar  expand="lg" className="navbar" >
      <Container>
      <Navbar.Brand href="#home">
        <img src={logot} width title="logotawfeer"   />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/jobs">Jobs</Nav.Link>
        
        </Nav>
       <Nav>
        <Nav.Link className="intern" href="#intern" >Intern-Program</Nav.Link>
       </Nav>
        
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navs;
