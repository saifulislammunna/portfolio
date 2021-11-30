 import './menu.scss'
 import { Link } from 'react-router-dom';


 export default function Menu( {menuOpen, setMenuOpen}){
     return (
         <div className=  {"menu " +(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Skills</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">Projects</a>  
                  {/*  <Link to="#works">Projects </Link> */}
                </li>
                 
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact Me</a>
                </li>
            </ul>
         </div>
     )
 }