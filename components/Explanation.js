import React from 'react';

const Explanation = () => (
  <section className="explanation">
    <h4>What is life insurance? Let us explain...</h4>

    <p>
      Life insurance is a way to provide for your family once you’re gone. It’s a difficult thing to think about, because no-one wants to spend their time imagining how or when their life might end and the financial repercussions this would have on their loved ones.
      It is often thought of as a complicated product, but this isn’t the case. The right policy for you is determined by a variety of factors including your health and lifestyle, age, whether you have children or grandchildren you wish to leave a lump sum to, or perhaps have a mortgage to pay off.
    </p>
    
    <p>
      <strong>
        If you'd like to hear more, give our friendly UK based team a call on <a href="tel:0333 880 3030">0333 880 3030</a> or email us at <a href="mailto:info@protectline.co.uk">info@protectline.co.uk</a>
      </strong>
    </p>

    <br />
    
    <p>Or simply enter your phone number or email address below and we'll give you a call back asap:</p>

    <form>
      <input type="text" placeholder="Enter your phone number or email address for a callback" />
      <button>Submit</button>
    </form>

    <style jsx>{`
      .explanation {
        width: 100%;
        max-width: 100rem;
        padding: 0 2rem;
        margin: 4rem auto;
        text-align: center;
      }
      .explanation p {
        font-size: 1.6rem;
      }
      .explanation form {
        margin: 2rem 0 0 0;
      }
      .explanation input {
        padding: 1rem;
        width: 100%;
        max-width: 40rem;
        text-align: center;
        border: 0.2rem solid #f57421;
      }
      .explanation button {
        padding: 1rem 2rem;
        background: #f57421;
        border: 0.2rem solid #f57421;
        color: #FFF;
        font-weight: bold;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
      }
      .explanation button:hover {
        background: #000;
        border: 0.2rem solid #000;
      }
      ::placeholder {
        color: #f57421;
        opacity: 1;
      }

      @media screen and (max-width: 567px) {
        .explanation input,
        .explanation button {
          width: 100%;
          max-width: 100%;
        }
      }
    `}</style>
  </section>
);

export default Explanation;
