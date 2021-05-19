import React, { useState } from 'react';
import { observer } from 'mobx-react';

import Input from '../../components/Input';
import Card from '../../components/Card';
import DateCard from './DateCard';
import Passengers from './Passengers';

import { airPlaneTicket } from '../../mobx-store';
import { increment, state} from '../../mobx-store/airPlaneTicket';
import { useHistory } from "react-router-dom";


const AirplaneContainer = observer(
  () => {
    let history = useHistory();
    const [departureCity, setDepartureCity] = useState(airPlaneTicket.departureCity);
    const [arrivalCity, setArrivalCity] = useState(airPlaneTicket.arrivalCity);

    const handleSearchBtn = () => {
      airPlaneTicket.setDepartureCity(departureCity);
      airPlaneTicket.setArrivalCity(arrivalCity);

      increment(state)

      history.push("/result");

      const returnDate = airPlaneTicket.stringReturnDate;
      const departureDate = airPlaneTicket.stringDepartureDate;

      const {
        passengerAdult,
        passengerChildren
      } = airPlaneTicket;

      const url = `https://polar-hollows-24549.herokuapp.com/get_tickets?departureCity=${departureCity}&arrivalCity=${arrivalCity}&departureDate=${departureDate}&returnDate=${returnDate}&passengerAdult=${passengerAdult}&passengerChildren=${passengerChildren}`
      
      airPlaneTicket.setWaitForResponse(true);
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setTimeout(
            () => {
              airPlaneTicket.setWaitForResponse(false)
              const tickets = data.body;
              airPlaneTicket.setTickets(tickets);
            }, 3000);
          console.log(data);
        });
    }

    return(
      <div className="pageContent airplanePage flex flex-column">
        <div className="cardsWrapper">
          <div className="routComponent">
            <Card
              value={departureCity}
              label="Departure City"
              buttonName="Select City"
              >
              <Input 
                inputClassName="citiesSearch"
                placeholder="Enter city or country"
                setValue={setDepartureCity}
                value={departureCity}
              />
            </Card>
            <Card
              value={arrivalCity}
              label="Arrival City"
              buttonName="Select City"
            > 
              <Input
                inputClassName="citiesSearch"
                placeholder="Enter city or country"
                setValue={setArrivalCity}  
                value={arrivalCity}
              />
            </Card>
          </div>
          <div className="flex">
            <DateCard />
            <Passengers />
          </div>
        </div>
        <button className="search-btn" onClick={handleSearchBtn}>Search</button>
      </div>
    )
  }
);

export default AirplaneContainer;
