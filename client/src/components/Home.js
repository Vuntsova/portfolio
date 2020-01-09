import React, { Fragment } from 'react';
import Social from './Social';
import { NavLink } from 'react-router-dom';

 export default function Home() {
     return (
       <Fragment>
         <main id="home">
           
           <h1 className="lg-heading">
             Emiliya <span className="text-secondary">Vuntsova</span>
           </h1>
           <h2 className="sm-heading">Full Stack Web Developer</h2>
           <Social></Social>
         </main>
       </Fragment>
     );
}

