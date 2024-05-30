import { useState } from "react"
import './Sidebar.css'
import { SelectedRoute } from "../../utils/SelectedRoute"
import { Home, MenuBookOutlined, FitnessCenter, Phone } from '@mui/icons-material'

interface props {
    routes: Function[],
    currentRoute: SelectedRoute,
    updateRouteTheme: Function
}

  

export default function Sidebar(props: props) {
    const [selectedRoute, updatedSelectedRoute] = useState([0, 0, 0, 0])
    const btnsText = ['Home', 'Restaurant Menu', 'Diet Calculator', 'More']
   
    const themes = [ 'home', 'createMenu', 'dietCalculator', 'contact' ]


    const onRouteClick = (num :  number ) : undefined => {
        
        props.routes[num]()
        // const updatedState = [0, 0, 0]
        // updatedState[selected] = 1
        // updatedSelectedRoute(updatedState)
        // props.route()
    }

    return (
        <div className={'sidebarCompentContainer'}>
             
            <button 
                className={`btn ${selectedRoute[0] ? 'active' : ''}  ${themes[props.currentRoute]} `}
                onClick={() => (updatedSelectedRoute([1, 0, 0, 0]), onRouteClick(0), props.updateRouteTheme(SelectedRoute.HOME)) }
            >
                {btnsText[0]} 
                <Home />
            </button>
            <button                 
                className={`btn ${selectedRoute[1] ? 'active' : ''}  ${themes[props.currentRoute]}`}
                onClick={() => (updatedSelectedRoute([0, 1, 0, 0]), onRouteClick(1) , props.updateRouteTheme(SelectedRoute.CREATE_MENU) ) }
            >
                {btnsText[1]}
                <MenuBookOutlined />
            </button>
            <button                 
                className={`btn ${selectedRoute[2] ? 'active' : ''}  ${themes[props.currentRoute]}`}
                onClick={() => (updatedSelectedRoute([0, 0, 1, 0]), onRouteClick(2), props.updateRouteTheme(SelectedRoute.DIET_CALCULATOR)) }
            >
                {btnsText[2]} <FitnessCenter />
            </button>
            <button 
                className={`btn ${selectedRoute[3] ? 'active' : ''}  ${themes[props.currentRoute]} `}
                onClick={() => (updatedSelectedRoute([0, 0, 0, 1]), onRouteClick(0), props.updateRouteTheme(SelectedRoute.CONTATO)) }
            >
                {btnsText[3]} <Phone />
            </button>
        </div>
    )
}