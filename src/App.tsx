 
import './components/Home.css'
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar" ;
import { useState } from 'react';
import { SelectedRoute } from './utils/SelectedRoute';
import { classes } from './utils/classes';

function App() {
 
  const [currentRoute, updatedCurrentRoute] = useState(SelectedRoute.HOME)

  const theme = classes

  const navigate = useNavigate()

  const goToHome = () => navigate('/')

  const goToCreateMenu = () => navigate('/create-menu')

  const goToDietCreator = () => navigate('/diet')






  return (
  <>
      <div className={`mainContainer ${theme[currentRoute]}`}>
          <div className="sidebarContainer">
               <Sidebar  routes={[goToHome , goToCreateMenu, goToDietCreator]} currentRoute={currentRoute} updateRouteTheme={updatedCurrentRoute} />
          </div>
          <div className="viewContainer">
              <Outlet />
          </div>
          <div className="footerContainer">
              <button  >footer btn</button>
          </div>
      </div>
      </>
  )
  
}

export default App
