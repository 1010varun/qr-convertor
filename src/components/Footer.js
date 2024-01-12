import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
<>
    <div className='footer'>
      
	<div class="waves">
		<div class="wave" id="wave1"></div>
		<div class="wave" id="wave2"></div>
		<div class="wave" id="wave3"></div>
		<div class="wave" id="wave4"></div>
	</div>

	{/* <ul class="menu">
		<li class="menu__item"><a class="menu__link" href="#">Home</a></li>
		<li class="menu__item"><a class="menu__link" href="#">About us</a></li>
		<li class="menu__item"><a class="menu__link" href="#">Contact us</a></li>


	</ul> */}
  <div className="content" style={{display:'flex',flexDirection:'column',gap:'0px',justifyContent:'center',alignItems:'center'}}>
	<p style={{opacity: 0.75,margin:'0',fontSize:'1.1rem'}}>Qr Code Generator</p>
	<p style={{opacity: 0.75,margin:'0'}}>Generates QR Code From Text</p>
  </div>
    </div>
    </>
  )
}

export default Footer
