import React, { useState } from 'react'
import './popups.css'

const Popups = (props) => {

  const [user,setUser]=useState({
    name:'',email:'',degree:'',DOB:''
  })
    const[formData,setFormData]=useState({
      name:'',
      email:'',
      degree:'',
      DOB:''
    });

    const handleSubmit=(event) =>{
      event.preventDefault();

      console.log('Form data',FormData);
    };
    const handleInputChange =(event) =>{
    const {name,value}=event.target;
    setUser({...user,[name]:value});
    event.target.reset();
  }
  const getdata =(e) =>{
    const {name,email,degree,DOB}=user;
    e.preventDefault();
    const options ={
      method:'POST',
      headers: {
        'Content-Type':'applicatiom/json'
      },
      body: JSON.stringify({
        name,email,degree,DOB
      })
    }
    const res= fetch('https://tawfeer-employment-default-rtdb.firebaseio.com/UserData.json',
    options)
    console.log()
    if(res){
      alert("Message sent")
    }
    else {
      alert("Erros Occured")
    }
  }
  return (props.trigger)?
  parseInt(props.trigger) ===1 ? (
    <div className="popup">
        <div className="popup-inner">
                <button className="close-btn" onClick={()=>props.setTrigger(0)}>close</button>
                {props.children}
                <form>
                  <label htmlFor="name">Full name:</label><br/>
                  <input type="text" id="name" name="name" value={user.name} onChange={handleInputChange} required/>
                  <br/><br/>
                  <label htmlFor="emial">Email:</label><br/>
                  <input type="email" id="email" name="email" value={user.email} onChange={handleInputChange} required/>
                  <br/><br/>
                  <label htmlFor="degree">Degree:</label><br/>
                  <input type="text" id="degree" name="degree" value={user.degree} onChange={handleInputChange} required/>
                  
                  <br/><br/>
                  <label htmlFor="DOB">Date of birth:</label><br/>
                  <input type="date" id="DOB" name="DOB" value={user.DOB} onChange={handleInputChange} required/>
                  <br/><br/>
                  <div class="item">
                    <p>Check the skills you have</p>
          <input
            class="radioitem"
            type="checkbox"
            id="verysatisfied"
            name="opinion"
            value="very satisfied"
            onChange={handleInputChange}
          />
          <label for="verysatisfied">Recording Financial Transactions</label><br />
          <input
            class="radioitem"
            type="checkbox"
            id="neutral"
            name="opinion"
            value="Neutral"
          />
          <label for="neutral">Preparing Financial Reports</label><br />
          <input
            class="radioitem"
            type="checkbox"
            id="notverysatisfied"
            name="opinion"
            value="very unsatisfied"
          />
          <label for="notverysatisfied">Compliance and Regulations</label><br/>
          <input
            class="radioitem"
            type="checkbox"
            id="notverysatisfied"
            name="opinion"
            value="very unsatisfied"
          />
          <label for="notverysatisfied">Communicating with Departments</label><br/>
          <input
            class="radioitem"
            type="checkbox"
            id="notverysatisfied"
            name="opinion"
            value="very unsatisfied"
          />
          <label for="notverysatisfied">Supporting Audits</label><br/><br/>
          <div class="item">
                    <p>Check the soft skills you have</p>
          <input
            class="radioitem"
            type="checkbox"
            id="verysatisfied"
            name="opinion"
            value="very satisfied"
          />
          <label for="verysatisfied">Collaborative</label><br />
          <input
            class="radioitem"
            type="checkbox"
            id="neutral"
            name="opinion"
            value="Neutral"
          />
          <label for="neutral">Expressive</label><br />
          <input
            class="radioitem"
            type="checkbox"
            id="neutral"
            name="opinion"
            value="Neutral"
          />
          <label for="neutral">Precise</label><br />
          <input
            class="radioitem"
            type="checkbox"
            id="neutral"
            name="opinion"
            value="Neutral"
          />
          <label for="neutral">Self-initiating</label><br />
          </div>
          <input type="submit" value="Submit" onClick={getdata}/>
        </div>
                </form>
            </div>
        </div>
  ) : parseInt(props.trigger) ===2 ? 
  
   (
    <div className="popup">
    <div className="popup-inner">
            <button className="close-btn" onClick={()=>props.setTrigger(0)}>close</button>
            {props.children}
            <form>
              <label htmlFor="name">Full name:</label><br/>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required/>
              <br/><br/>
              <label htmlFor="emial">Email:</label><br/>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required/>
              <br/><br/>
              <label htmlFor="degree">Degree:</label><br/>
              <input type="text" id="degree" name="degree" value={formData.degree} onChange={handleInputChange} required/>
              <br/><br/>
                  <label htmlFor="DOB">Date of birth:</label><br/>
                  <input type="date" id="DOB" name="DOB" value={formData.DOB} onChange={handleInputChange} required/>
              
              <br/><br/>
              <div class="item">
                    <p>Check the skills you have</p>
          <input
            class="radioitem"
            type="checkbox"
            id="verysatisfied"
            name="opinion"
            value="very satisfied"
          />
          <label for="verysatisfied">Video Creation</label><br />
          <input
            class="radioitem"
            type="checkbox"
            id="neutral"
            name="opinion"
            value="Neutral"
          />
          <label for="neutral">Social Media Content</label><br />
          <input
            class="radioitem"
            type="checkbox"
            id="notverysatisfied"
            name="opinion"
            value="very unsatisfied"
          />
          <label for="notverysatisfied">Podcasting</label><br/>
          <input
            class="radioitem"
            type="checkbox"
            id="notverysatisfied"
            name="opinion"
            value="very unsatisfied"
          />
          <label for="notverysatisfied">Graphic Design</label><br/>
          <input
            class="radioitem"
            type="checkbox"
            id="notverysatisfied"
            name="opinion"
            value="very unsatisfied"
          />
          <label for="notverysatisfied">Community Engagement</label><br/><br/>
          
        </div>
        <div class="item">
                    <p>Check the soft skills you have</p>
          <input
            class="radioitem"
            type="checkbox"
            id="verysatisfied"
            name="opinion"
            value="very satisfied"
          />
          <label for="verysatisfied">Collaborative</label><br />
          <input
            class="radioitem"
            type="checkbox"
            id="neutral"
            name="opinion"
            value="Neutral"
          />
          <label for="neutral">Expressive</label><br />
          <input
            class="radioitem"
            type="checkbox"
            id="neutral"
            name="opinion"
            value="Neutral"
          />
          <label for="neutral">Precise</label><br />
          <input
            class="radioitem"
            type="checkbox"
            id="neutral"
            name="opinion"
            value="Neutral"
          />
          <label for="neutral">Self-initiating</label><br />
          </div>
          <input type="submit" value="Submit" onClick={getdata}/>
            </form>
        </div>
    </div>
  ): parseInt(props.trigger) ===3 ? 
  
  (
   <div className="popup">
   <div className="popup-inner">
           <button className="close-btn" onClick={()=>props.setTrigger(0)}>close</button>
           {props.children}
           <form>
             <label htmlFor="name">Full name:</label><br/>
             <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required/>
             <br/><br/>
             <label htmlFor="emial">Email:</label><br/>
             <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required/>
             <br/><br/>
             <label htmlFor="degree">Degree:</label><br/>
             <input type="text" id="degree" name="degree" value={formData.degree} onChange={handleInputChange} required/>
             <br/><br/>
                  <label htmlFor="DOB">Date of birth:</label><br/>
                  <input type="date" id="DOB" name="DOB" value={formData.DOB} onChange={handleInputChange} required/>
             <br/><br/>
             <div class="item">
                    <p>Check the skills you have</p>
          <input
            class="radioitem"
            type="checkbox"
            id="verysatisfied"
            name="opinion"
            value="very satisfied"
          />
          <label for="verysatisfied">Managing Store Operations</label><br />
          <input
            class="radioitem"
            type="checkbox"
            id="neutral"
            name="opinion"
            value="Neutral"
          />
          <label for="neutral">Inventory Control</label><br />
          <input
            class="radioitem"
            type="checkbox"
            id="notverysatisfied"
            name="opinion"
            value="very unsatisfied"
          />
          <label for="notverysatisfied">Staff Management</label><br/>
          <input
            class="radioitem"
            type="checkbox"
            id="notverysatisfied"
            name="opinion"
            value="very unsatisfied"
          />
          <label for="notverysatisfied">Reporting and Analysis</label><br/>
          <input
            class="radioitem"
            type="checkbox"
            id="notverysatisfied"
            name="opinion"
            value="very unsatisfied"
          />
          <label for="notverysatisfied">Visual Merchandising</label><br/><br/>
          
        </div><br/>
             <div class="item">
                    <p>Check the soft skills you have</p>
          <input
            class="radioitem"
            type="checkbox"
            id="verysatisfied"
            name="opinion"
            value="very satisfied"
          />
          <label for="verysatisfied">Collaborative</label><br />
          <input
            class="radioitem"
            type="checkbox"
            id="neutral"
            name="opinion"
            value="Neutral"
          />
          <label for="neutral">Expressive</label><br />
          <input
            class="radioitem"
            type="checkbox"
            id="neutral"
            name="opinion"
            value="Neutral"
          />
          <label for="neutral">Precise</label><br />
          <input
            class="radioitem"
            type="checkbox"
            id="neutral"
            name="opinion"
            value="Neutral"
          />
          <label for="neutral">Self-initiating</label><br />
          <input type="submit" value="Submit" />
          </div>
          <input type="submit" value="Submit" onClick={getdata}/>
           </form>
       </div>
   </div>
 ): 
  
 (
  <div className="popup">
  <div className="popup-inner">
          <button className="close-btn" onClick={()=>props.setTrigger(0)}>close</button>
          {props.children}
          <form>
            <label htmlFor="name">Full name:</label><br/>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required/>
            <br/><br/>
            <label htmlFor="emial">Email:</label><br/>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required/>
            <br/><br/>
            <label htmlFor="degree">Degree:</label><br/>
            <input type="text" id="degree" name="degree" value={formData.degree} onChange={handleInputChange} required/>
            <br/><br/>
                  <label htmlFor="DOB">Date of birth:</label><br/>
                  <input type="date" id="DOB" name="DOB" value={formData.DOB} onChange={handleInputChange} required/>
             <br/><br/>
            <br/><br/>
            <div class="item">
                    <p>Check the skills you have</p>
          <input
            class="radioitem"
            type="checkbox"
            id="verysatisfied"
            name="opinion"
            value="very satisfied"
          />
          <label for="verysatisfied">Building Relationships</label><br />
          <input
            class="radioitem"
            type="checkbox"
            id="neutral"
            name="opinion"
            value="Neutral"
          />
          <label for="neutral">Sales Pipeline Management</label><br />
          <input
            class="radioitem"
            type="checkbox"
            id="notverysatisfied"
            name="opinion"
            value="very unsatisfied"
          />
          <label for="notverysatisfied">Market Intelligence</label><br/>
          <input
            class="radioitem"
            type="checkbox"
            id="notverysatisfied"
            name="opinion"
            value="very unsatisfied"
          />
          <label for="notverysatisfied">Product Knowledge</label><br/>
          <input
            class="radioitem"
            type="checkbox"
            id="notverysatisfied"
            name="opinion"
            value="very unsatisfied"
          />
          <label for="notverysatisfied">Negotiation and Closing Deals</label><br/><br/>
        
        </div><br/>
            <div class="item">
                    <p>Check the soft skills you have</p>
          <input
            class="radioitem"
            type="checkbox"
            id="verysatisfied"
            name="opinion"
            value="very satisfied"
          />
          <label for="verysatisfied">Collaborative</label><br />
          <input
            class="radioitem"
            type="checkbox"
            id="neutral"
            name="opinion"
            value="Neutral"
          />
          <label for="neutral">Expressive</label><br />
          <input
            class="radioitem"
            type="checkbox"
            id="neutral"
            name="opinion"
            value="Neutral"
          />
          <label for="neutral">Precise</label><br />
          <input
            class="radioitem"
            type="checkbox"
            id="neutral"
            name="opinion"
            value="Neutral"
          />
          <label for="neutral">Self-initiating</label><br />
          </div>
          <input type="submit" value="Submit" onClick={getdata}/>
          </form>
      </div>
  </div>
 ):"";
 
}



export default Popups