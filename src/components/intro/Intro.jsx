import React, { useEffect,useRef } from 'react';
import './intro.scss'
import { init } from 'ityped'
/* import { Link } from '@material-ui/core'; */
const  Intro = () => {
    
    const textRef = useRef();
    useEffect(()=> {
       
        init(textRef.current, {
             showCursor: true,
             backDelay:  1500,
             backSpeed: 70,
              strings: ['Front-End Web-developer.'] })


    },[])

    /* const onClick = () =>{
       <Link to=/> https://drive.google.com/file/d/1gjHKkIwGdvlAiH384MTHhwENmbx_mEUR/view?usp=sharing </Link>
    } */

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
                
            </div>
            <div className="right">
            
                  <div className="wrapper">
                      <h2>Hi There, I'm </h2>
                      <h1>Saiful Islam</h1>
                       
                      <h3> <span ref={textRef}></span></h3>
                     
                    <a href="saiful-islam-resume.pdf" download="Saiful  saiful-islam-resume.pdf">
                     <button className="btn highlighted-btn">Download Resume</button>
                   </a>
                     
                   
                  </div>
                  
                  {/* <a href="#portfolio">
                      <img src="assets/down.png" alt="" />
                  </a> */}
            </div>
          
        </div>
    );
};

export default Intro;