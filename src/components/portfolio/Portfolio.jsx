import React from 'react';
import './portfolio.scss'
const Portfolio = () => {
    return (
        <div  className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Html</li>
                <li>Css</li>
                <li>JavaScript</li>
                <li>React js </li>
                <li>Node js</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/html51.jpg " alt="" />
                    <h3>Html</h3>
                </div>
                <div className="item">
                    <img src="assets/html51.jpg " alt="" />
                    <h3>Html</h3>
                </div>
                <div className="item">
                    <img src="assets/html51.jpg " alt="" />
                    <h3>Html</h3>
                </div>
                <div className="item">
                    <img src="assets/html51.jpg " alt="" />
                    <h3>Html</h3>
                </div>
                <div className="item">
                    <img src="assets/html51.jpg " alt="" />
                    <h3>Html</h3>
                </div>
                <div className="item">
                    <img src="assets/html51.jpg " alt="" />
                    <h3>Html  </h3>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;