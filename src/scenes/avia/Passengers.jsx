import React, { useState } from 'react';

import Card from '../../components/Card';
import Passenger from './passenger';
import { airPlaneTicket } from '../../mobx-store';

const Passengers = props => {
  const [passengers, setPassengers] = useState(airPlaneTicket.passengers);


  return(
    <div className="flex w-50">
      <Card 
        label="Adult"
        buttonName="Select Adults"
        value=""
        isShort
      >
        <Passenger count={1}/>
      </Card>
      <Card 
        label="Children"
        buttonName="Select Children"
        value=""
        isShort
      >
        <Passenger count={0}/>
      </Card>
    </div>
  )
}

export default Passengers;
