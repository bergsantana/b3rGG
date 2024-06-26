import { 
    ArrowLeft, 
    BatteryCharging30,
    Bluetooth, 
    CameraEnhance,  
    Circle,       
    Email,   
    Google,   
    Mic,   
    NotificationsOff,   
     
    Phone,   
    SignalCellularAlt,   SquareRounded, Timer, ViewCompact, Wifi } from "@mui/icons-material";
import './styles/Android.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChrome } from "@fortawesome/free-brands-svg-icons"; 
 

export default function Android() {
    const  currTime  =  new Date() 
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    return (
        <>
            <div className="phoneCase">
                <div className="screen">
                    <div className="headerIcons">
                        <div className="leftBox">
                            <NotificationsOff />
                            <Timer />
                        </div>
                        <div className="rightBox">

                            <Bluetooth />
                            <SignalCellularAlt />
                            <Wifi />
                            <BatteryCharging30 />
                        </div>
                    </div>
                    <div className="searchBar">
                        <Google />
                        <input />
                        <Mic />
                    </div>
               
                    <div className="timeDate">
                        <div className="currHourMin">
                            <p>{`${currTime.getHours()}:${currTime.getMinutes() > 9 ? currTime.getMinutes() : '0' + currTime.getMinutes()  } ` }</p> 
                            <p>{`${weekday[currTime.getDay()]}`}</p>
                        </div>

                    </div>
                    <div className="bottomIcons">

                    </div>

                    <div className="footerIcons">
                        <Phone fontSize="large" /> 
                        <FontAwesomeIcon icon={faChrome} /> 
                        <ViewCompact  fontSize="large" />
                        <Email fontSize="large" />
                        <CameraEnhance fontSize="large" />
                    </div>
                </div>
                <div className="footerBtns">
                    <ArrowLeft />
                    <Circle />
                    <SquareRounded />
                </div>
            </div>
        </>
    )
}