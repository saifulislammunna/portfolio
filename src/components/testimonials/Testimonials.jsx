 
import './testimonials.scss'
 

export default function Testimonials(){
    return (
    <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img className="user
                        " src="assets/user-1.png" alt="" />
                        <img className="right" src="assets/Youtube.png" alt="" />
                         </div>
                        <div className="center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptatibus.
                        </div>
                        
                       <div className="bottom">
                                <h3>Ibrahim</h3>
                                <h4>CEO of LAMA</h4>
                      </div>
                        
                   
                </div>
            </div>
    </div>
    );
};