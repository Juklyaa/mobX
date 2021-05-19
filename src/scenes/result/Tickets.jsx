import React, { useEffect, useState } from 'react';
import { airPlaneTicket } from '../../mobx-store';



const Tickets = props => {
  const [tickets, setTickets] = useState(airPlaneTicket.tickets);
  
  return(
    <ul>
      {tickets.map(ticket => 
        <li>
          <div className="tickets">
            <div className="airLine">{ticket.airLine ? ticket.airLine : 'Surprise'}</div>
            <div className="ticket">
              <div className="m-10">{ticket.departureCity} - {ticket.arrivalCity}</div>
              <div className="m-10">{ticket.price}</div>
            </div>
          </div>
        </li>
      )}
    </ul>
  )
}

export default Tickets;
