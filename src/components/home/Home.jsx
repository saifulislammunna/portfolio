import React, { useState } from 'react';
import Contact from '../contact/Contact';
import Intro from '../intro/Intro';
import Menu from '../menu/Menu';
import Portfolio from '../portfolio/Portfolio';
import Testimonials from '../testimonials/Testimonials';
import Topbar from '../topbar/Topbar';
import Works from '../works/Works';
import './home.scss';
const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="app">
        {/* top
        sec -intro -portfolio -work ... */}
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
         <div className="sections">
   
            <Intro/>
            <Portfolio/>
             <Works/>
            <Testimonials/>
            <Contact/>  
           
           
         </div>
        
     </div>
    );
};

export default Home;