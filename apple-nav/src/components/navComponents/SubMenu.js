import React from 'react';
import {Link} from 'react-router-dom';


function SubMenu(props) {
    let currentMenu = props.currentMenu.subMenu || ['']
    return (
        <div className='sub-menu'>{currentMenu.map(el => <Link to="/" key={el}>{el}</Link>)}</div>
    );
}

export default SubMenu;