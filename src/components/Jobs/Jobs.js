import React from 'react'
import './jobs.css'
import { useState } from "react";
import Popups from './Popups';

const Jobs = () => {
  const [buttonPopup,setButtonPopup]=useState(0);
  const [cards] = useState([
    { id:1,
      name: "Junior Accountant",
      Description:"A junior accountant supports the accounting department in various financial tasks and responsibilities under the guidance of more experienced accountants or supervisors.",
      Years_of_experience:" +1",
      Degree:" Business, Accounting,Banking"
    },{
      id:2,
      name: "Content Creator",
      Description:"A content creator is responsible for conceptualizing, producing, and often distributing various forms of content across digital platforms to engage and attarct customers.",
      Years_of_experience:" +3",
      Degree:"Graphic Designer, Interior Design, Digital  Marketing"
    }
    ,{
      id:2,
      name: "Store Manager",
      Description:"A retail store manager is responsible for overseeing the day-to-day operations of a retail establishment, ensuring smooth functioning, maximizing sales, and providing excellent customer service.",
      Years_of_experience:" +5",
      Degree:"Management, MIS, Business"
    }
    ,{
      id:2,
      name: "Sales Person",
      Description:"A salesperson plays a key role in the process of selling products or services. Their primary responsibility is to generate revenue for the company by identifying potential customers, persuading them to purchase the company's offerings",
      Years_of_experience:" 0-1+",
      Degree:"Business,Marketing, Management -accept umi-students"
    }
  ])
  return (
    
    <div>
    <section>
      <div className="containerk">
      <h3>Here you will fine job posting available with description about each,click apply to apply for suitable one.</h3>
        <div className="cards">
          {cards.map((card, i) => (
            <div key={i} className="card1">
              <h3> {card.name} </h3>
              <p><b>Description: </b>{card.Description}</p>
              <p><b>Years of experience: </b> {card.Years_of_experience}</p>
              <p><b>Degree: </b> {card.Degree}</p>
              <button className="btn" onClick={()=> setButtonPopup(card.id)}> Apply</button>
            </div>
          ))}
          
          
        </div>
      </div>
    </section>
   
              <Popups trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>Kindly fill the form below</h3>
              </Popups>
  </div>
  )
}

export default Jobs