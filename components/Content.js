import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Content = () => (
  <section className="content">
		<Image
		  src="/logo.png"
		  alt="Protect Line Logo"
		  width={125}
		  height={30}
		/>

		<h1>Whole of Life Insurance</h1>

		<h2>Peace of mind for your whole life.</h2>

		<p>Whole of Life Insurance is a policy where you’re guaranteed a pay-out from the insurer whenever you die, because the policy has no expiration date. As long as you pay your monthly premiums, you can relax knowing that there is enough money aside to cover whatever you may leave undone.</p>

		<p>Fill in the quick and simple form, and we'll either be able to provide you with an instant, free quote, or one of our dedicated, UK based team will give you a call back to discuss the policy in more detail.</p>

		<p>Or if you'd prefer, you can give our friendly UK based team a call on <a href="tel:0333 880 3030">0333 880 3030</a> or email us at <a href="mailto:info@protectline.co.uk">info@protectline.co.uk</a></p>

		<p><strong>Cover starts from as little as £10 per month, which we think is a small price to protect your loved ones, no matter what!</strong></p>

	  <style jsx>{`
	  	.content h1 {
	  		margin-top: 2rem;
	  	}
	  	.content h2 {
	  		color: #f57421;
	  		font-weight: bold;
	  	}
	  `}</style>
  </section>
);

export default Content;
