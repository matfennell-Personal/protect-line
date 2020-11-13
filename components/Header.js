import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const phoneNum = '0333 880 3030';

  const heroImgs = [
    "/hero.jpg",
    "/hero1.jpg",
    "/hero2.jpg"
  ];

  const randomImg = heroImgs[
    Math.floor(Math.random() * heroImgs.length)
  ];

  return (
    <header className="header">
      <section className="header__logo">
        <Image
          src="/logo.png"
          alt="Protect Line Logo"
          width={252}
          height={63}
        />
      </section>

      <section className="header__cta">
        <Link href={`tel:${phoneNum}`}>
          <a>{phoneNum}</a>
        </Link>
      </section>

      <section className="header__banner">
        <h1>Life Insurance Made Simple.</h1>
        <h2>You're just a few moments away from seeing the <strong>best</strong> quote for you and your family.</h2>

        <Link href="/">
          <a>Start your free quote &#8250;</a>
        </Link>
      </section>

      <section className="header__trustpilot">
        <Image
          src="/trustpilot.png"
          alt="Protect Line Logo"
          width={300}
          height={50}
        />
      </section>

      <style jsx>{`
        .header {
          position: relative;
          width: 100%;
          height: 56rem;
          background-size: cover;
          background-position: 0 38%;
          background-image: url("${randomImg}");
        }
        .header__banner {
          position: absolute;
          bottom: 14rem;
          width: 100%;
          padding: 2.6rem;
          background: rgba(255, 255, 255, 0.7);
          text-align: center;
        }
        .header__logo {
          padding: 2rem;
        }
        .header__cta {
          position: absolute;
          right: 2rem;
          top: 2rem;
          font-size: 2rem;
          font-weight: bold;
        }
        .header__trustpilot {
          position: absolute;
          bottom: 6rem;
          left: 50%;
          transform: translateX(-50%);
        }

        @media screen and (max-width: 440px) {
          .header {
            background-position: 30% center;
          }
          .header__cta {
            right: 1rem;
            top: 0;
          }
        }
      `}</style>  

    </header>
  );
};

export default Header;
