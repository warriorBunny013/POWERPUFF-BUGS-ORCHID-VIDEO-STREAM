import React from 'react';
import {Link} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './nav.css';

function MainLogo () {
    return(
    <div className="logoContainer">
        <h6 onClick={null}>
            <span className="primaryColor">WATCH </span>
            <span className="secondaryColor"> PARTY</span>
        </h6>
    </div>
    );
    }

function NavBar(){
    // const history = useHistory();
    const history=createBrowserHistory()
    const imageClick=()=>{
        history.push('/');
    }
return(<nav>
        <MainLogo />
    </nav>
);
}

export default NavBar;