import React from 'react';
import { observer } from 'mobx-react';

import Input from '../../components/Input';
import Card from '../../components/Card';
import DateCard from './DateCard';
import Passengers from './Passengers';

import { myPlaneTicket } from '../../mobx-store/airPlaneTicket'
import { increment, state} from '../../mobx-store/airPlaneTicket';
import { useHistory } from "react-router-dom";


const AirplaneContainer = observer(() => {
    let history = useHistory();
    
    const {
      arrivalCity,
      departureCity,
      passengerAdult,
      passengerChildren,
      stringReturnDate,
      stringDepartureDate,

      setDepartureCity,
      setArrivalCity,
      searchTicket,
    } = myPlaneTicket;
    
    const handleSearchBtn = () => {
      history.push("/result");
      searchTicket();
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
            <DateCard ticket={myPlaneTicket}/>
            <Passengers ticket={myPlaneTicket}/>
          </div>
          </div>
        <button onClick={handleSearchBtn} className="search-btn">Search</button>
      </div>
    )
  }
);

export default AirplaneContainer;
