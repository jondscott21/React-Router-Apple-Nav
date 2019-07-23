import React from 'react';
import { Link } from "react-router-dom";

function NavAnchors(props) {
    let navData = props.navData;
    let setCurrentMenu = props.setCurrentMenu;
    return (
        <Link to={`/${navData.name}`} onClick={() => setCurrentMenu(navData)}>{navData.name} </Link>
    );
}

export default NavAnchors;