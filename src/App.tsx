 
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

  const goToHome = () => navigate('/b3rGG')

  const goToCreateMenu = () => navigate('/b3rGG/create-menu')

  const goToDietCreator = () => navigate('/b3rGG/diet')

  const goToAndroid = () => navigate('/b3rGG/android')






  return (
  <>
      <div className={`mainContainer ${theme[currentRoute]}`}>
          <div className="sidebarContainer">
               <Sidebar  routes={[goToHome , goToCreateMenu, goToDietCreator, goToAndroid]} currentRoute={currentRoute} updateRouteTheme={updatedCurrentRoute} />
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
