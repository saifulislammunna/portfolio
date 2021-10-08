 
import './works.scss'
 export default function Works() {
    return (
        <div className="works" id="works"> 
                 <div className="slider">
                     <div className="container">
                         <div className="item">
                             <div className="left">
                                 <div className="leftContainer">
                                     <div className="imgContainer">
                                         <img src="assets/images.jpg" alt="" />
                                     </div>
                                     <h2>Plane Html & css</h2>
                                     <p>order different types of recipes</p>
                                     <span>projects</span>
                                 </div>
                             </div>
                             <div className="right">
                                       <img src="assets/Food network.jpg" alt="" />
                             </div>
                         </div>
                     </div>
                 </div>
                 <img src="assets/arrow.png" className="arrow left" alt="" />
                 <img src="assets/arrow.png" className="arrow right" alt="" />
        </div>
    );
};

 