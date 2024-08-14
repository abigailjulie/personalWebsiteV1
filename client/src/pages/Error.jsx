import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import VerticalStack from '../components/VerticalStack';
import './ErrCont.css';

export default function Error() {
   const email = "abigail.figaro@gmail.com";

   return (
      <div className="errContContainer">
         <div className="errCont">
            <h1>Whoops!</h1>
            <h4>Something went wrong</h4>
            <VerticalStack showHomeLink = {true}/>
         </div>
      </div>
   )
};