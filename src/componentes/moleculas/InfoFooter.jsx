import React from 'react'
import './InfoFooter.css'

function InfoFooter() {
  return (
    <section className='infoCard'>
        <div>
            <h2>Product</h2>
            <a href="">Shoes</a>
        </div>
        <div>
            <h2>About Us</h2>
            <a href="">Careers</a>
        </div>
        <div>
            <h2>Support</h2>
            <a href="">FAQ</a>
            <a href="">General Policy</a>
        </div>
        <div>
            <h2>Contact</h2>
            <a href="">Email: Grupodelosenfermos@mail.com</a>
        </div>
        <div>
            <img src="/ShoeMate/logo.png" alt="" />
        </div>
    </section>
  )
}

export default InfoFooter