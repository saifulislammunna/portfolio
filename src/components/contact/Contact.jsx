 
import React, { useState } from 'react';
import Footer from '../footer/Footer';
import './contact.scss';
 

const Contact = () => {
   
    const [message,setMessage] = useState(false)

    const handleSubmit = (e) => {

        e.preventDefault();
        setMessage(true)
    }
    return (
       <div>
            <div className="contact" id="contact">
           <div className="left">
                 <img src="assets/shake3.png" alt="" />
           </div>
           <div className="right">
               <h2>Contact.</h2>
               <form onSubmit={handleSubmit}>
                   <input type="text" placeholder="Email" />
                   <textarea placeholder="Message"></textarea>
                   <button type="submit">Send</button>
                   {message && <span>Thanks, I'll reply ASAP:)</span>}
               </form>
           </div>
       </div>
          <Footer/>   
        </div>
    );
};

export default Contact;