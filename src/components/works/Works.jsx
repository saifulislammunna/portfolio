 
import './works.scss';
 import React, { useEffect, useState } from 'react';

 export default function Works() {
    const [works, setWorks] = useState([]);
    const  [ currentSlide, setCurrentSlide] = useState(0);
    
    useEffect(() => {
        fetch('https://guarded-beach-88441.herokuapp.com/works')
            .then(res => res.json())
            .then(data => setWorks(data));
    }, []);

    const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < works.length - 1 ? currentSlide + 1 : 0);
      };
      
    return (
        <div className="works" id="works"> 
                 <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                     
                      {works.map((work )=>   (

                     <div className="container">
                         <div className="item">
                             <div className="left">
                                 <div className="leftContainer">
                                     <div className="imgContainer">
                                          <img src={work.icon} alt="" />  
                                     </div>
                                       <h2>{work.name}</h2>
                                     <p>{work.description}</p>  
                                     <a href={work.link}><span>project link </span></a>
                                 </div>
                             </div>
                             <div className="right">
                            
                                        <img  src={work.img} alt="" /> 
                             </div>
                         </div>
                            
                        
                     </div> 
                      ))} 
                    
                    
                 </div>
               
                 <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
                 <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")} />
        </div>
    );
};


