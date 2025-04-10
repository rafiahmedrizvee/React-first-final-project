import React from 'react';


const Footer = () => {
    return (
     <div className='bg-[#3085a7]'>
       <footer  className="footer sm:footer-horizontal text-neutral-content p-10 ">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Visa Query</a>
        <a className="link link-hover">Passport</a>
        <a className="link link-hover">Immigration</a>
        <a className="link link-hover">Study Abroad</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
     </div>
    );
};

export default Footer;