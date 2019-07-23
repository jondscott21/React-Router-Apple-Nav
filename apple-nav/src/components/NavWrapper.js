import React from 'react';
import NavAnchors from './navComponents/NavAnchors'
import {Link} from 'react-router-dom';


function NavWrapper(props) {
    let navData = props.navData;
    let setCurrentMenu = props.setCurrentMenu;
    return (
        <nav className="nav-wrapper">
            {/* <Link to="/"><svg id='logo' src="../logo.svg"></svg></Link> */}
            {navData.map(el => <NavAnchors key={el.name} navData={el} setCurrentMenu={setCurrentMenu} />)}
        </nav>
    );
}

export default NavWrapper;