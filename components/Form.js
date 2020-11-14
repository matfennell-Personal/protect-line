import React, { useEffect } from 'react';

const Form = () => {
  useEffect(() => {
    const setBubble = (range, bubble) => {
      bubble.innerHTML = 'Value: £' + new Intl.NumberFormat().format(range.value);
    }

    const wrap = document.querySelector(".range-wrap");
    const range = wrap.querySelector(".range");
    const bubble = wrap.querySelector(".value");

    range.addEventListener("input", () => {
      setBubble(range, bubble);
    });

    setBubble(range, bubble);
  });

  return (
    <section className="form">
      <h3>Quick Quote</h3>

      <p>Fill in the below for a free, instant quick quote:</p>

      <form>
        <div className="form__item">
          <label htmlFor="name">Full name</label>
          <input type="text" id="name" />
        </div>

        <div className="form__item">
          <label htmlFor="phone">Phone number</label>
          <input type="text" id="phone" />
        </div>

        <div className="form__item">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" />
        </div>

        <div className="form__item">
          <label htmlFor="value">How much cover do you need?</label>
          <div className="range-wrap">
            <input type="range" className="range" min="10000" max="999999" />
            <output className="value"></output>
          </div>
        </div> 

        <div className="form__item">
          <label>Would you like critical illness cover?</label>
          <select>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form__item">
          <button type="submit" value="submit">Get your free quote</button>
        </div>
      </form>

      <style jsx>{`
        .form {
          padding: 3rem;
        }
        .form h3 {
          font-size: 3rem;
        }
        .form p {
          font-size: 1.6rem;
        }
        .form__item {
          background: rgba(255, 255, 255, 0.8);
          padding: 2rem 2rem 1rem;
        }
        .form__item:last-of-type {
          padding-bottom: 2rem;
        }
        .form__item button {
          width: 100%;
          padding: 1.5rem;
          background: #f57421;
          border: none;
          outline: none;
          border-radius: 0.5rem;
          text-align: center;
          font-weight: bold;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s ease-in-out;   
        }
        .form__item button:hover {
          background: #000;
        }
        .form__item label {
          display: block;
          width: 100%;
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .form__item input,
        .form__item select {
          display: block;
          width: 100%;
          padding: 1.5rem;
          font-weight: bold;
        }
        .form__item input[type="text"],
        .form__item input[type="email"],
        .form__item select {
          border: 0.1rem solid #000;
        }
        .form__item input[type="text"]:focus,
        .form__item input[type="email"]:focus,
        .form__item select:focus {
          border: 0.2rem solid #f57421;
          outline: none;
        }
        .form__item .value {
          font-size: 1.6rem;
          font-weight: bold;
        }
        .form__item input[type=range] {
          height: 4rem;
          -webkit-appearance: none;
          margin: 1rem 0;
          width: 100%;
          padding: 0;
          background: transparent;
        }
        .form__item input[type=range]:focus {
          outline: none;
        }
        .form__item input[type=range]::-webkit-slider-runnable-track {
          width: 100%;
          height: 1rem;
          cursor: pointer;
          animate: 0.2s;
          box-shadow: 0.1rem 0.1rem 0.1rem #000000;
          background: #323232;
          border-radius: 0.5rem;
          border: 0.1rem solid #000000;
        }
        .form__item input[type=range]::-webkit-slider-thumb {
          box-shadow: 0.1rem 0.1rem 0.1rem #000000;
          border: 0.1rem solid #000000;
          height: 3rem;
          width: 3rem;
          border-radius: 1.5rem;
          background: #F57421;
          cursor: pointer;
          -webkit-appearance: none;
          margin-top: -1.1rem;
        }
        .form__item input[type=range]:focus::-webkit-slider-runnable-track {
          background: #323232;
        }
        .form__item input[type=range]::-moz-range-track {
          width: 100%;
          height: 1rem;
          cursor: pointer;
          animate: 0.2s;
          box-shadow: 0.1rem 0.1rem 0.1rem #000000;
          background: #323232;
          border-radius: 0.5rem;
          border: 0.1rem solid #000000;
        }
        .form__item input[type=range]::-moz-range-thumb {
          box-shadow: 0.1rem 0.1rem 0.1rem #000000;
          border: 0.1rem solid #000000;
          height: 3rem;
          width: 3rem;
          border-radius: 1.5rem;
          background: #F57421;
          cursor: pointer;
        }

        @media screen and (max-width: 767px) {
          .form {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Form;
