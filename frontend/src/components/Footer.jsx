import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='section__container footer__container'>

        {/* ---- contact info ---- */}
        <div className='footer__col'>
            <h4>CONTACT INFO</h4>
            <p>
                <span><i className="ri-map-pin-2-fill"></i></span>
                436,london road, UK
            </p>
            <p>
                <span><i className="ri-mail-fill"></i></span>
                teebliss@support.com
            </p>
            <p>
                <span><i className="ri-phone-fill"></i></span>
                (+44) 123-456-7890
            </p>
        </div>

        {/* ---- company ---- */}
        <div className='footer__col'>
            <h4>COMPANY</h4>
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Shop</a>
            <a href="/">Terms & Conditions</a>
        </div>

        {/* ---- social links ---- */}
        <div className='footer__col'>
            <h4>SOCIAL LINKS</h4>
            <a href="/"><i className="ri-instagram-fill"></i> teebliss_</a>
            <a href="/"><i class="ri-twitter-x-fill"></i> tee_bliss</a>
        </div>

        {/* ---- more info ---- */}
        <div className='footer__col'>
            <h4>TEEBLISS</h4>
            <a href="/">Copyright © 2025 TeeBliss. All rights reserved. </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
