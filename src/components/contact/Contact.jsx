 
import React, { useState }     from 'react';
import Footer from '../footer/Footer';
import emailjs from 'emailjs-com';

import './contact.scss';
 

const Contact = () => {
   
     const [message,setMessage] = useState(false)  
    /* const [jot, setJot] = useState(false) */
   /*  const handleSubmit = (e) => {

        e.preventDefault();
        
        setMessage(true);
       
    } */
    
    /* const form = useRef(); */

  function sendEmail(e){
    e.preventDefault();
    setMessage(true);
    emailjs.sendForm('service_ybgp0fl', 'template_vjqi89k', e.target, 'user_AsinyqnRoCIeoj17Wk9Bn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
    return (
       <div>
            <div className="contact" id="contact">
           <div className="left">
                 <img src="assets/shake3.png" alt="" />
           </div>
           <div className="right">
               <h2>Contact Me</h2>
               <form onSubmit={sendEmail}  >
                   <input type="text" placeholder="name" name="name" />
                   <input type="text" placeholder="Email" name="email"/>
                   <textarea placeholder="Message" name="message"></textarea>
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