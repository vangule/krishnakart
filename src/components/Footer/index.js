import React from 'react'
import { NavLink } from "react-router-dom";
import { Container, Email, SubmitBtn } from './styles';
import { SOCIALS } from '../../constants';
import Button from '../common/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <section className="contact-short">
        <div className="grid grid-two-column">
        <div>
          <h3>Ready to get started?</h3>
          <h3>Talk to us today</h3>
        </div>

        <div>
            <NavLink to="/"><Button text='get started' /></NavLink>
        </div>
        </div>
      </section>

    <footer>
      <div className="container grid grid-four-column">
        <div className="footer-about">
          <h3>Krishna Kart</h3>
          <p>Trusted by more than 1 Crore Indians</p>
          <p>Cash on Delivery | Free Delivery</p>
        </div>
        <div className="footer-subscribe">
          <h3>Subscribe to get important updates</h3>
          <form action="#" style={{ display:'flex', }}>
            <Email type="email" name="email" placeholder="YOUR E-MAIL" />
            <SubmitBtn>Subscribe</SubmitBtn>
          </form>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
            <div style={{ display :'flex'}}>
              {(SOCIALS || []).map((item) => {
                const { link = '', icon : Icon, key = ''  } = item || {};

              return(
                <a href={link} target="_blank" rel="noreferrer" key={key}>
                  <div style={{ marginRight: '16px'}} className="footer-social--icons">
                    <div>
                      <Icon className="icons" />
                    </div>
                  </div>
                </a>
              )})}
            </div>
        </div>
        <div className="footer-contact">
          <h3>Call Us</h3>
          <h3>+91 9284315806</h3>
        </div>
      </div>

      <div className="footer-bottom--section">
        <hr />
        <div className="container grid grid-two-column ">
          <p>
            @{currentYear} KrishnaKart. All Rights Reserved
          </p>
          <div>
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
          </div>
        </div>
      </div>
    </footer>
  </Container>
  );
};

export default Footer;