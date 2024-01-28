import React from "react";
//import Card from "react-bootstrap/Card";
//import l1 from "../../assets/LOGO.jpg";
//import { Container } from "react-bootstrap";
import { useState } from "react";
import "./Content.css";

const Content = () => {
  const [cards] = useState([
    {
      title: "HR Department",
      text: "This department plays an important role within the organization, focusing on managing and supporting employees throughout their employment life cycle.",
    },
    {
      title: "Finance Department",
      text: "This department plays a pivotal role in managing the financial aspects,treasury management,budgeting and cost control and ensuring the financial health of the company.",
    },
    {
      title: "Commercial Department",
      text: "This department is primarily respinsible for various aspects related to business development, sales, contract management and pricing and revenue management.",
    },
    {
      title: "Marketing Department",
      text: "This department is responsible for developing and implementing strategies to promote the company's products, services and brand.",
    },
    {
      title: "Operation Department",
      text: "This department focuses on managing and overseeing the day-to-day activities that are essential for the organization to fucntion effectively and efficiently.",
    },
    {
      title: "IT Department",
      text: "This department  is responsible for managing and maintaining the technology infrastructure,systems and services that support the company's operations.",
    },
  ]);
  return (
    <div>
      <section>
        <div className="containerk">
          <h1>Tawfeer's Departments</h1>
          <div className="cards">
            {cards.map((card, i) => (
              <div key={i} className="card1">
                <h2> {card.title} </h2>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;

//<Card.Img variant="top" src="l1" />
/*    <Container>
         <Card style={{ width: '18rem' }}>
 
 <Card.Body>
   <Card.Title>Finance And Accounting</Card.Title>
   <Card.Text>
     Manage firm's long-term and day-to-day monetary operations and strategy.
   </Card.Text>
   
 </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>

 <Card.Body>
   <Card.Title>Finance And Accounting</Card.Title>
   <Card.Text>
     Manage firm's long-term and day-to-day monetary operations and strategy.
   </Card.Text>
   
 </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>

 <Card.Body>
   <Card.Title>Finance And Accounting</Card.Title>
   <Card.Text>
     Manage firm's long-term and day-to-day monetary operations and strategy.
   </Card.Text>
   
 </Card.Body>
</Card>
    </Container>*/
