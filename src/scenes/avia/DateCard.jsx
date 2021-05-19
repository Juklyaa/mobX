import React, { useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Card from '../../components/Card';
import { airPlaneTicket } from '../../mobx-store';

const DateCard = props => {
  const [departure, setDeparture] = useState(airPlaneTicket.departureDate);
  const [returnDate, setReturnDate] = useState(airPlaneTicket.returnDate);

  const handleDepartureDate = date => {
    airPlaneTicket.setDepartureDate(date)
    setDeparture(date)
  }

  const handleReturnDate = date => {
    console.log(date);
    airPlaneTicket.setReturnDate(date)
    setReturnDate(date)
  }

  console.log(returnDate);

  return(
    <div className="flex w-50">
      <Card 
        label="Departure"
        buttonName="Select Date"
        isShort
      >
       <DatePicker selected={departure} onChange={handleDepartureDate} />
      </Card>
      <Card 
        label="Return"
        buttonName="Select Date"
        isShort
      >
       <DatePicker selected={returnDate} onChange={handleReturnDate} />
      </Card>
    </div>
  )
}


export default DateCard;