import React, { useState,useEffect, useRef } from 'react'
import RightArrow from '@material-ui/icons/ArrowForwardIos';
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';
import PersonPointing from '../Images/bike10.jpeg';
import HeaderClickEvent from './HeaderClickEvent';
// import { ContactSupportOutlined } from '@material-ui/icons';


let Header = () => {
    let [click,setClick] = useState(false)
    let [select,setSelect] = useState('Select State')
    let childRef = useRef(null)
    useEffect(() =>{
        let handler = (event) =>{
            if(childRef.current === null){
                setClick(false)
            }
            else if(!childRef.current.contains(event.target)){
                setClick(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    },[])

    return(
        <div  className="header-section">
        {click ?  <HeaderClickEvent forwardRef={childRef} setClick={setClick} setSelect={setSelect}/> : ''}
            <img className="header-main-image" src={PersonPointing} alt="" />
            <div className="header-text-section">
                <h1>DRIVE IN  A SANITIZED ZOOMCAR</h1>
                <div   className="header-cont-item-1">
                    <p>Self Drive Car Rental in</p>
                    <button onClick={() => setClick(!click)} type="submit">{select} <ArrowDown style={{fontSize:34}} /></button>
                    
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