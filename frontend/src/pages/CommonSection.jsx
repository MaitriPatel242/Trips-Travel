import React from 'react';
import './CommonSection.css';

const CommonSection = ({ title }) => {
   return (
      <section className="common__section">
         <div className="container">
            <div className="row">
               <div className="col">
                  <h1>{title}</h1>
               </div>
            </div>
         </div>
      </section>
   );
}

export default CommonSection;