
import { useState, useCallback  } from "react";

import NavBar from './components/nav-bar/nav-bar';
import Main from "./pages/main/main";
import History from "./pages/history/history";
import Team from "./pages/team/team";

import './App.scss';


function App() {
  const [activeLink, setActiveLink] = useState("Main");

  const handleNavItemClick = useCallback((linkName) => {
    setActiveLink(linkName);
  }, []);


  let activeComponent;
  if (activeLink === 'Main') {
    activeComponent = <Main />
  } else if (activeLink === 'History') { 
    activeComponent = <History/>;
  } else if (activeLink === 'Team') {
    activeComponent = <Team 
      handleNavItemClick={handleNavItemClick} 
      activeLink={activeLink}
    />;
  }

  return (
    <div className="App">
      <NavBar handleNavItemClick={handleNavItemClick} activeLink={activeLink}/>
      <div className="main__wrapper">
        {activeComponent}
      </div>
    </div>
  );
}

export default App;
