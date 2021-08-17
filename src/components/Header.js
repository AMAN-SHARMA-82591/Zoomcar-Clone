import React, { useState } from 'react'
import RightArrow from '@material-ui/icons/ArrowForwardIos';
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';
import PersonPointing from '../Images/bike10.jpeg';
import HeaderClickEvent from './HeaderClickEvent';


let Header = () => {
    let [click,setClick] = useState(false)
   

    return(
        <div  className="header-section">
        {click ?  <HeaderClickEvent /> : null}
            <img className="header-main-image" src={PersonPointing} alt="" />
            <div className="header-text-section">
                <h1>DRIVE IN  A SANITIZED ZOOMCAR</h1>
                <div   className="header-cont-item-1">
                    <p>Self Drive Car Rental in</p>
                    <button onClick={() => setClick(!click)} type="submit">Select State <ArrowDown style={{fontSize:34}} /></button>
                    
                </div>
                <div className="header-cont-item-2">
                    <p>Start your wonderful journey</p>
                    <RightArrow style={{color:"rgb(94, 86, 86)"}} />
                </div>
                
            </div>
            
        </div>
    )
}
export default Header