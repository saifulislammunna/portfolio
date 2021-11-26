import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright  } from '@fortawesome/free-solid-svg-icons'
import './footer.scss';


const Footer = () => {
    return (
        <div>
        <div className="footer">
            <h5>Copyright <FontAwesomeIcon icon={faCopyright} /> 2021 <span style={{color:"#FFC014"}}> Saiful Islam Munna</span> | All Rights Reserved</h5>
        </div>
    </div>
    );
};

export default Footer;