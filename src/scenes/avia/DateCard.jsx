import React, { useState } from 'react';
import { observer } from 'mobx-react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Card from '../../components/Card';

const DateCard = observer(({ ticket }) => {
  const {
    departureDate,
    returnDate,
    setReturnDate,
    setDepartureDate 
  } = ticket;

  const handleDepartureDate = date => {
    setDepartureDate(date)
  }

  const handleReturnDate = function (date) {
    setReturnDate(date)
  }

  return(
    <div className="flex w-50">
      <Card 
        label="Departure"
        buttonName="Select Date"
        isShort
      >
       <DatePicker selected={departureDate} onChange={handleDepartureDate} />
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
})


export default DateCard;