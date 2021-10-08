import React, { useState } from 'react';
 import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss'
const Portfolio = () => {
   const [selected,setSelected] = useState("featured")
    const list = [
    {
        id: "featured",
        title: "Featured",
    },
    {
        id: "html",
        title: "Html",
    },
    {
        id: "css",
        title: "Css",
    },
    {
        id: "js",
        title: "JavaScript",
    },
    {
        id: "bootstrap",
        title: "Bootstrap",
    },
    {
        id: "react",
        title: "React js",
    },
    {
        id: "node",
        title: "Node js",
    }
    
]

    return (
        <div  className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList title={item.title} 
                    active = {selected === item.id}
                     setSelected={setSelected}
                     id={item.id}/>
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/html51.jpg " alt="" />
                    <h3>Html 98%</h3>
                </div>
                <div className="item">
                    <img src="assets/css.jpg " alt="" />
                    <h3>Css 90%</h3>
                </div>
                <div className="item">
                    <img src="assets/javascript.png" alt="" />
                    <h3>javascript 93%</h3>
                </div>
                <div className="item">
                    <img src="assets/bootstrap.jpg" alt="" />
                    <h3>Bootstrap 95%</h3>
                </div>
                <div className="item">
                    <img src="assets/react.jpg " alt="" />
                    <h3>react js 91%</h3>
                </div>
                <div className="item">
                    <img src="assets/nodejs.png " alt="" />
                    <h3>Node js 92% </h3>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;