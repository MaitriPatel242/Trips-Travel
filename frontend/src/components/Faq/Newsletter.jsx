import React from 'react';
import './newsletter.css';
import maleTourist from './gallery-04.jpg';

const NewsLetter = () => {
   return (
      <section className="newsletter">
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="newsletter__content">
                     <h2>Subscribe now to get useful traveling information</h2>

                     <div className="newsletter__input">
                        <input type="email" placeholder="Enter your email" required />
                        <button
                           className="newsletter__btn"
                           onClick={() => alert('Subscribe Successful')}
                        >
                           Subscribe
                        </button>
                     </div>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati adipisici sunt in, provident facere ipsam?
                     </p>
                  </div>
               </div>
               <div className="col">
                  <div className="newsletter__img">
                     <img src={maleTourist} alt="Tourist" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default NewsLetter;
