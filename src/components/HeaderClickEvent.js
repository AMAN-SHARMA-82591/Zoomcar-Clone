import React, { useState } from 'react'
import one from '../Images/chandigarh.png'
import two from '../Images/hyderabad.png'
import three from '../Images/banglore.png'
import four from '../Images/kolkata.png'
import five from '../Images/mumbai.png'
import six from '../Images/delhi.png'
import seven from '../Images/chennai.png'
import eight from '../Images/vadodra.png'
import nine from '../Images/pune.png'
import SearchIcon from '@material-ui/icons/Search'
let images = [one,two,three, four,five,six,seven,eight,nine]
let name = ['Chandigarh','Hyderabad','Banglore','Kolkata','Mumbai','Delhi NCR','Chennai','Vadodra','Pune']
let name2 =['Nashik','Udupi-Manipal','Kochi','patna','Coimbatore','Indore','Guwahati','Calicut','Jaipur','Lucknow','Bhopal','Nagpur','Mysore','Raipur','Vijayawada','Bhubaneswar','Siliguri','Trichy','Vizag','Ahmedabad'];

let HeaderClickEvent = () =>{
    let [value,setValue] = useState("")
    console.log(value)
    return(
        <div className="header-click-event-section">
            <div className="header-content-sec-1">
                <div className="header-click-main-heading">SELECT YOUR CITY</div>
                <div className="header-click-event-input">
                    <SearchIcon style={{color:"grey"}}/>
                    <input onChange={(e) => setValue(e.target.value)} placeholder="Search City" type="text"/>
                </div>
            </div>
            <div className="header-content-sec-2">
                <div>
                        <p style={{textAlign:'left',fontSize:"18px",letterSpacing:"1px"}}>Popular City</p>
                        <ul className="header-click-list-item-1">
                            {name.map((value,i) =>{
                                return(
                                    <li className="list-item-1 " key={i}>
                                        <img className="header-click-image" src={images[i]} alt="" />
                                        {value}
                                    </li>
                                )
                            })}
                    </ul>
                </div>
                <div style={{marginTop:"60px"}}>
                    <p style={{textAlign:"left",fontSize:"18px",letterSpacing:"1px"}}>Other Cities</p>
                    <ul className="header-click-list-item-2">
                            {name2.map((value,i) =>{
                                return (
                                    <li className="list-item-2" key={i}>
                                        {value}
                                    </li>
                                )
                            })}
                    </ul>
                </div>
                    
            </div>
        </div>
    )
}
export default HeaderClickEvent