import React, { useEffect, useState } from 'react';
import { airPlaneTicket } from '../../mobx-store';

import Tickets from './Tickets';


const tickets = [{
price: 10, city: 'Lviv'
},{price: 100, city: 'Merefa'},{price: 123, city: "Paris" }
]


const Result = props => {
  const [showResult, setShowResult] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);

  const report = airPlaneTicket.report();

  useEffect(() => {
    setTimeout(() => {
      if(report === 'We have enough data'){
        setShowResult(true)
      }
    }, 5000);
  })

  useEffect(()=> {
    console.log(airPlaneTicket.waitForResponse);
    setShowSpinner(airPlaneTicket.waitForResponse)
  }, [airPlaneTicket.waitForResponse])

  return(
    <div className="flex justC-center">
      {showResult
        ? <div>
          <Tickets />
        </div>
        : <div className="w-100">
          <p className="report-message">{report}</p>
          {
            showSpinner 
            ? <div className="spin-wrapper">
              <div className="spinner" />
            </div>
            : null
          }
        </div>
      }
    </div>
  )
}

export default Result;
