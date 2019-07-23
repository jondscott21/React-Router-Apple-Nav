import React from 'react';
import { NavLink } from "react-router-dom";

function NavAnchors(props) {
    let navData = props.navData;
    let setCurrentMenu = props.setCurrentMenu;
    return (
        <NavLink className="menu" activeClassName="active-menu" to={`/${navData.name}`} onClick={() => setCurrentMenu(navData)}>{navData.name} </NavLink>
    );
}

export default NavAnchors;