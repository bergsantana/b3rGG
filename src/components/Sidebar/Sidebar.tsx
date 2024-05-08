import { useState } from "react"
import './Sidebar.css'
import { SelectedRoute } from "../../utils/SelectedRoute"

interface props {
    routes: Function[],
    currentRoute: SelectedRoute,
    updateRouteTheme: Function
}

  

export default function Sidebar(props: props) {
    const [selectedRoute, updatedSelectedRoute] = useState([0, 0, 0, 0])
    const btnsText = ['Home', 'Criação de Cardárpio', 'Dashboard', 'Contato']
   
    const themes = [ 'home', 'createMenu', 'dashboard', 'contact' ]


    const onRouteClick = (num :  number ) : undefined => {
        
        props.routes[num]()
        // const updatedState = [0, 0, 0]
        // updatedState[selected] = 1
        // updatedSelectedRoute(updatedState)
        // props.route()
    }

    return (
        <div className={'sidebarContainer'}>
             
            <button 
                className={`btn ${selectedRoute[0] ? 'active' : ''}  ${themes[props.currentRoute]} `}
                onClick={() => (updatedSelectedRoute([1, 0, 0, 0]), onRouteClick(0), props.updateRouteTheme(SelectedRoute.HOME)) }
            >
                {btnsText[0]}
            </button>
            <button                 
                className={`btn ${selectedRoute[1] ? 'active' : ''}  ${themes[props.currentRoute]}`}
                onClick={() => (updatedSelectedRoute([0, 1, 0, 0]), onRouteClick(1) , props.updateRouteTheme(SelectedRoute.CREATE_MENU) ) }
            >
                {btnsText[1]}
            </button>
            <button                 
                className={`btn ${selectedRoute[2] ? 'active' : ''}  ${themes[props.currentRoute]}`}
                onClick={() => (updatedSelectedRoute([0, 0, 1, 0]), onRouteClick(0), props.updateRouteTheme(SelectedRoute.DASHBOARD)) }
            >
                {btnsText[2]}
            </button>
            <button 
                className={`btn ${selectedRoute[3] ? 'active' : ''}  ${themes[props.currentRoute]} `}
                onClick={() => (updatedSelectedRoute([0, 0, 0, 1]), onRouteClick(0), props.updateRouteTheme(SelectedRoute.CONTATO)) }
            >
                {btnsText[3]}
            </button>
        </div>
    )
}