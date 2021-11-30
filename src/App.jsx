 
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio";
 import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";  
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
/*  import "./app.scss"  */
import { useState } from "react";
import Menu from "./components/menu/Menu";
/* import Works from "./components/works/Works"; */
import Home from "./components/home/Home";
import Work from "./components/work/Work";
import WorksDetail from "./components/WorksDetail/WorksDetail";
 

function App() {
  /* const [menuOpen, setMenuOpen] = useState(false); */
  return (
    <div /* className="app" */>
       {/* top
       sec -intro -portfolio -work ... */}
       {/* <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>*/}
        <div /* className="sections" */>
  
          {/*  <Intro/>
           <Portfolio/>
            <Works/>
           <Testimonials/>
           <Contact/>    */}
          
          
            <Router>
               <Home/>
              <Switch>
            
 
             <Route path="/work">
               <Work/>
             </Route>  
            <Route exact path="/work/:_id">
               <WorksDetail></WorksDetail>
             </Route>   

            

          
                  
           
         </Switch>
       </Router> 
          
        </div>
       
    </div>
  );
}

export default App;
