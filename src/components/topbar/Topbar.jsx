import React from 'react';
import './topbar.scss'
import {Person,Mail} from "@material-ui/icons"
const Topbar = () => {
    return (
        <div className="topbar">
             <div className="wrapper">
                 <div className="left">
                     <a href="#intro" className="logo">   saiful. </a>
                     <div className="item-container">
                        <Person className="icon"/>
                        <span>+8801799****88</span>
                     </div>
                     <div className="item-container">
                        <Mail className="icon"/>
                        <span>saifulmunna**@gmail.com</span>
                     </div>
                      
                 </div>
                
                 <div className="right">
                   
                 </div>
             </div>
        </div>
    );
};

export default Topbar;