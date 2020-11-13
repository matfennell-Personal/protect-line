import React from 'react';
import Link from 'next/link';

const Ctas = () => (
  <section className="ctas">
  	<article className="cta">
  		<h3>From only £5 per month</h3>
  		<p>Our service is fee-free and starts from as little as £5 per month</p>

      <Link href="/">
        <a>See our plans &#8250;</a>
      </Link>
  	</article>

  	<article className="cta">
  		<h3>#1 life insurance broker</h3>
  		<p>You think we're doing a pretty good job so far - rating us #1 on Trustpilot</p>
  		<a>Read the reviews &#8250;</a>
  	</article>

  	<article className="cta">
  		<h3>Insurance tailored to you</h3>
  		<p>Finding the right life insurance policy for you is our top priority</p>
  		<a>View the options &#8250;</a>
  	</article>  	

    <style jsx>{`
      .ctas {
      	position: relative;
      	display: flex;
      	margin: -3rem auto 0;
      	width: 100%;
      	max-width: 100rem;
      }
      .cta {
      	margin: 0 2rem;
      	background: #fff;
      	padding: 2rem 1.4rem;
      	text-align: center;
      	width: 33.333%;
      	box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.2);
      }
      .cta p {
      	font-size: 1.6rem;
      	margin-bottom: 2rem;
      }
      .cta a {
      	display: inline-block;
      	padding: 1rem;
      	font-size: 1.6rem;
      	border: 0.2rem solid #f57421;
      }

      @media screen and (max-width: 667px) {
      	.ctas {
      		flex-direction: column;
      	}
      	.cta {
      		width: calc(100% - 4rem);
      	}
      }
    `}</style>
  </section>
);

export default Ctas;
