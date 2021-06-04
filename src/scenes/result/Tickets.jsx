import React, { useEffect, useState } from 'react';

import { myCart } from '../../mobx-store/cart';

const Tickets = props => {
  const { setMyTicket } = myCart;
  return(
    <ul>
      {props.tickets.map(ticket => 
        <li onClick={() => setMyTicket(ticket)}>
          <div className="tickets">
            <div className="airLine">{ticket.airLine ? ticket.airLine : 'Surprise'}</div>
            <div>
              <div className="m-10">{ticket.departureCity} - {ticket.arrivalCity}</div>
              <div className="m-10">{ticket.price} ₴</div>
            </div>
          </div>
        </li>
      )}
    </ul>
  )
}

export default Tickets;
