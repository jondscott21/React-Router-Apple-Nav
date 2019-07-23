import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import navData from './data/navData';
import SubMenu from './components/navComponents/SubMenu'

import NavWrapper from './components/NavWrapper';

function App() {
  const [currentMenu, setCurrentMenu] = useState([])  
  return (
    <Router>
      <div className="App">
        <NavWrapper navData={navData} setCurrentMenu={setCurrentMenu} />
      </div>
      <Switch>
        {/* <Route path="/" exact component={App} /> */}
        <Route path="/:device/" render={props => <SubMenu {...props} currentMenu={currentMenu} />} />
      </Switch>
    </Router>
    
  );
}

export default App;
