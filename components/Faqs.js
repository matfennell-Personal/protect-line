import React, { useState } from 'react';

const Faqs = () => {
  const [faqs, setFaqs] = useState(false);

  const toggleFaqs = (e) => {
    faqs === true ? setFaqs(false) : setFaqs(true);
  };

  return (
    <section className="faqs">
      <button onClick={toggleFaqs}>Click to view our frequently asked questions &#8595;</button>

      <div className={`faqs__answers ${faqs === false ? 'is-hidden' : ''}`}>
        <p>
          <strong>How do I get life insurance?</strong><br />
          We make the process of getting life insurance simple. Firstly, you can use our life insurance quote comparison service to compare quotes so you have a rough idea of how much a policy might cost. Once you’ve done this, you have the option of requesting a callback or contacting us – we’ll learn more about you and your health and lifestyle before presenting you with a fully personalised, tailored quote.
        </p>

        <p>
          <strong>What are the different types of life insurance?</strong><br />
          Life insurance can often be confusing due to the variety of different policies and options that are available. We’ve listed the most popular life insurance products here: Level Term, Decreasing Term, Whole of Life, Critical Illness Cover, Joint, Over 50s (Non-Medical)
        </p>

        <p>
          <strong>How much does life insurance cost?</strong><br />
          This wholly depends on you, the individual, and your circumstances. Life insurance can start from as little as £5 a month depending on your age, health and lifestyle and other factors. Generally, the younger and healthier you are, the less you’ll pay for your life insurance.
        </p>

        <p>
          <strong>How does life insurance work?</strong><br />
          Because life insurance can come in many different shapes and sizes, this can depend on your personal circumstances and what works best for you. As an example, a product you could consider is ‘Level Term’ life insurance. This type of life insurance provides a fixed sum assured – the money you’ve decided should be available when you die – to go to your loved ones or nominated beneficiaries. You choose how much this could be and how long the policy lasts for. All you do is keep making your monthly premium payments and the cover is in place.
        </p>
      </div>

      <style jsx>{`
        .faqs {
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 2rem 4rem;
          text-align: center;
        }
        .faqs button {
          border: none;
          outline: none;
          background: none;
          font-weight: bold;
          font-size: 1.6rem;
          cursor: pointer;
          color: #737373;
        }
        .faqs button:hover {
          text-decoration: underline;
        }
        .faqs__answers.is-hidden {
          display: none;
        }
        .faqs__answers p {
          font-size: 1.6rem;
          margin-bottom: 2rem;
        }
      `}</style>
    </section>
  );
};

export default Faqs;
