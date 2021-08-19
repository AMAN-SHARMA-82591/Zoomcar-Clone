import React from 'react'
import Navbarlogo from '../Images/zoomcar.png'
import  '../App.css'
import Amigo from '../Images/amigo.jpg'
import ShopIcon from '@material-ui/icons/Shop';
import AppleIcon from '@material-ui/icons/Apple';
const navbar = ['OFFERS','SUBSCRIPTION','AMIGO','ZMS','MOBILE APP','SIGNUP','LOGIN']

let Navbar = () =>{
    return(
        <div className="navbar-section">  
            <div className="navbar-section-contents">
                    <div className="Navbar-logo">
                            <img src={Navbarlogo} alt=""  />
                    </div>
                    <ul className="navbar-main-section">
                        {navbar.map((value,i) => {
                            if(i === 1){
                              return   (
                            <div key={i}>
                                <li className="nav-list">
                                    {value}
                                    <div className="list-item-hover">
                                        <img style={{width:"120px",height:"40px"}} alt="" src={Navbarlogo}/>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugit ut sit error rerum autem a ex, similique distinctio id sapiente cumque eum nam repudiandae voluptates laudantium iusto temporibus.</p>
                                        <button>KNOW MORE</button>
                                    </div>
                                </li>
                              
                            </div>

                                )
                            }
                            else if(i === 2){
                              return   (
                            <div key={i}>
                                <li className="nav-list">
                                    {value}
                                    <div style={{left:"-130px",padding:"20px 10px"}} className="list-item-hover">
                                       <img style={{width:"120px",height:"30px"}} src={Amigo} alt=""/>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugit ut sit error rerum autem a ex, similique distinctio id sapiente cumque eum nam repudiandae </p>
                                        <button> KNOW MORE</button>
                                    </div>
                                </li>
                              
                            </div>

                                )
                            }
                            else if(i === 3){
                              return   (
                            <div key={i}>
                                <li className="nav-list">
                                    {value}
                                    <div style={{left:"-140px"}} className="list-item-hover">
                                        <img style={{width:"120px",height:"40px"}} src={Navbarlogo} alt="" />
                                        <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugit ut sit error rerum autem a ex.
                                        </p>
                                        <button>KNOW MORE</button>
                                    </div>
                                </li>
                              
                            </div>

                                )
                            }
                            else if(i === 4){
                              return   (
                            <div key={i}>
                                <li className="nav-list">
                                    {value}
                                    <div style={{width:'180px',left:"-20px"}} className="list-item-hover unique-button">
                                            <button><ShopIcon styles={{paddingRight:"20px"}}/>Google Play</button>
                                            <hr></hr>
                                            <button><AppleIcon styles={{paddingRight:"20px"}} /> Apple Play</button>

                                    </div>
                                </li>
                              
                            </div>

                                )
                                
                            }
                           return  (
                            <li key={i} className="nav-list">
                                {value}
                            </li>
                        )
                        }
                     
                        )}
                    </ul>
            </div>
                
        </div>
    )
}
export default Navbar