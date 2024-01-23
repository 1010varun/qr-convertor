import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
<>
    <div className='footer'>
      
	<div className="waves">
		<div className="wave" id="wave1"></div>
		<div className="wave" id="wave2"></div>
		<div className="wave" id="wave3"></div>
		<div className="wave" id="wave4"></div>
	</div>

	
  <div className="content" style={{display:'flex',flexDirection:'column',gap:'0px',justifyContent:'center',alignItems:'center'}}>
	<p style={{opacity: 0.75,margin:'0',fontSize:'1.1rem'}}>Qr Code Generator</p>
	<p style={{opacity: 0.75,margin:'0'}}>Generates QR Code From Text</p>
  </div>
    </div>
    </>
  )
}

export default Footer
