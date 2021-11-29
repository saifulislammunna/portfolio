 
import React, { useState } from 'react';
import Footer from '../footer/Footer';
import './contact.scss';
 

const Contact = () => {
   
    const [message,setMessage] = useState(false)
    /* const [jot, setJot] = useState(false) */
    const handleSubmit = (e) => {

        e.preventDefault();
        
        setMessage(true);
      /*   setJot(true); */
    }
    
    /* const onSubmit = () => {
       const src = "https://form.jotform.com/jsform/213324490883458";

    } */
    return (
       <div>
            <div className="contact" id="contact">
           <div className="left">
                 <img src="assets/shake3.png" alt="" />
           </div>
           <div className="right">
               <h2>Contact Me</h2>
               <form onSubmit={handleSubmit}>
                   <input type="text" placeholder="Email" />
                   <textarea placeholder="Message"></textarea>
                   <button   type="submit">Submit</button>
                   {message && <span>Thanks, I'll reply ASAP:)</span>}
                   
               </form>
           </div>
       </div>
          <Footer/>   
        </div>
    );
};

export default Contact;