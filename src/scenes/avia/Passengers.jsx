import React, { useState } from 'react';
import { observer } from 'mobx-react';

import Card from '../../components/Card';
import Passenger from './passenger';

const Passengers = observer((ticket) => {

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
})

export default Passengers;
