import './footer.css'
import{FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp} from 'react-icons/fa'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={40} style={{color:'#fff', marginRight: "2rem"}}/>
                    <div >
                        <p>12-2-244 Ashok Nagar</p>
                        <p>Anantapur</p>
                        <p>Andhra Pre</p>
                    </div>
                    <div className="phone">
                        <h4>
                        <FaPhone size={20} style={{color:'#fff', marginRight: "2rem"}}/>
                    +919100712708
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                        <FaMailBulk size={20} style={{color:'#fff', marginRight: "2rem"}}/>
                    subaiam04@gmail.com
                        </h4>
                    </div>
                </div>
            </div>
            
            <div className="right">
                <h4>
                    Social media Profiles
                </h4>
                <div className="socialmedia">
                <div className="social">
                <FaFacebook
                 size={30} 
                 style={{color:'blue', marginRight: "2rem"}}/>
                </div>
                <div className="social">
                <FaInstagram
                 size={30} 
                 style={{color:'violet', marginRight: "2rem"}}/>
                </div>
                <div className="social">
                <FaLinkedinIn
                 size={30} 
                 style={{color:'darkblue', marginRight: "2rem"}}/>
                </div>
                <div className="social">
                <FaGithub
                 size={30} 
                 style={{color:'black', marginRight: "2rem"}}/>
                </div> 
                <div className="social">
                <FaWhatsapp
                 size={30} 
                 style={{color:'darkgreen', marginRight: "2rem"}}/>
                </div>  
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer