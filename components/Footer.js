import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => (
  <footer className="footer">
    <section className="footer__logo">
      <Image
        src="/logo2.png"
        alt="Protect Line Logo"
        width={120}
        height={80}
      />
    </section>

    <ul>
      <li>
        <a href="https://www.protectline.co.uk/">Home</a>
      </li>
      <li>
        <a href="https://www.protectline.co.uk/life-insurance/">Life Insurance</a>
      </li>
      <li>
        <a href="https://www.protectline.co.uk/about-us/">About Us</a>
      </li>
      <li>
        <a href="https://www.protectline.co.uk/help/">Help</a>
      </li>
      <li>
        <a href="https://www.protectline.co.uk/blog/">Blog</a>
      </li>
      <li>
        <a href="https://www.protectline.co.uk/contact-us/">Contact</a>
      </li>
      <li>
        <a href="https://www.protectline.co.uk/refer-a-friend/">Refer a friend</a>
      </li>
    </ul>

    <p className="footer__links">
      <Link href="/">
        <a>Start your free quote</a>
      </Link>

      <Link href="tel:0333 880 3030">
        <a>0333 880 3030</a>
      </Link>
    </p>

    <div className="footer__divider"></div>

    <p>Copyright &copy; Protect Line 2010 - {new Date().getFullYear()}</p>
    <p>The guidance provided within this website is subject to the UK regulatory regime and is therefore primarily targeted at consumers based in the UK.</p>
    <p>Protect Line Ltd is an appointed representative of TenetLime Ltd which is authorised and regulated by the Financial Conduct Authority. TenetLime Ltd is entered on the Financial Services Register (www.fca.org.uk/register) under reference 311266.</p>
    <p>Protect Line Ltd is registered in England and Wales registered no. 7059779. Registered Address: Protect Line, Bourne Gate, 25 Bourne Valley Road, Poole, BH12 1DY</p>

    <style jsx>{`
      .footer {
        width: 100%;
        padding: 4rem 2rem;
        background: #444444;
        text-align: center;
      }
      .footer__divider {
        margin: 0 0 2rem;
        height: 0.1rem;
        background: #737373;
      }
      .footer__links a {
        margin: 0 1rem 2rem;
      }
      .footer a {
        display: inline-block;
      }
      .footer ul {
        padding: 2rem 0 0;
        list-style-type: none;
      }
      .footer ul li {
        display: inline-block;
        margin: 0 0.5rem;
      }
      .footer ul li a {
        font-weight: normal;
        color: #fff;
        font-size: 1.4rem;
      }
      .footer ul li a:hover {
        text-decoration: underline;
      }
      .footer p {
        font-size: 1.2rem;
        color: #fff;
      }
      .footer p:first-of-type {
        margin-top: 3rem;
      }
    `}</style>
  </footer>
);

export default Footer;
