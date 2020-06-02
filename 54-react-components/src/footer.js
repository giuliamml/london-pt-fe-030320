import React from "react";

const Footer = () => {
  return (
    <div className="footer_wrapper">
        <div className='contacts'>
            <p>
                email@email.com
            </p>
        </div>

        <div className='about'>
            <p>something about us</p>
        </div>

        <div className='social'>
        <i href="#" class="fa fa-facebook"></i>
        <i href="#" class="fa fa-instagram"></i>
        <i href="#" class="fa fa-twitter"></i>

        </div>
   
    </div>
   
  );
};

export default Footer;
