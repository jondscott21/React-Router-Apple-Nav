import React from 'react';
import NavAnchors from './navComponents/NavAnchors'


function NavWrapper(props) {
    let navData = props.navData;
    let setCurrentMenu = props.setCurrentMenu;
    return (
        <nav className="nav-wrapper">
            {navData.map(el => <NavAnchors key={el.name} navData={el} setCurrentMenu={setCurrentMenu} />)}
        </nav>
    );
}

export default NavWrapper;