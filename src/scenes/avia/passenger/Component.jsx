import React, { useState } from 'react';

const Passenger = props => {
  const [passenger, setPassenger] = useState(props.count);

  const handleIncrement = () => {
    setPassenger(passenger+1)
  }

  const handleDecrement = () => {
    setPassenger(passenger-1)
  } 

  return(
    <div className="flex">
      <div className="fs-42">{passenger}</div>
      <div className="flex flex-column">
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        </div>
    </div>
  )
}

export default Passenger;
