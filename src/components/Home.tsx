import { useState } from "react";
 
import './Home.css'
import { Outlet, useNavigate } from "react-router-dom";



export default function Home(){
    const [ welcome, setWelcome ] = useState('Welcome USER')

    function handleClick() {
        setWelcome(`${welcome}` + 'plus ')
    }

    const navigate = useNavigate()
    const goToCreateMenu = () => navigate('/create-menu')

    return (
    <>
        <div className={'mainContainer'}>
            <p>
                { welcome }
            </p>
            <button onClick={handleClick} className={'clickMeBtn'} >
               ( click me )
            </button>
            <div className="createMenuContainer">
                <button onClick={goToCreateMenu} >
                   CREATE MENU
                </button>
            </div>
            <div className="viewContainer">
                <Outlet />
            </div>
        </div>
        </>
    )
    

}