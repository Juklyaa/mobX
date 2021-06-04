import React from 'react';
import { observer } from 'mobx-react';

import { myCart } from '../../mobx-store/cart'

const Cart = observer( props => {
  const { myTicket } = myCart;
  return(
    <div className="flex justC-center">
      { myTicket.length
        ? (<div>
          <h1>SHOPPING BAG</h1>
          <h2>{myTicket.length} ITEMS</h2>
          <ul>
            {myTicket.map((ticket, i) =>
              (<li className="tickets">
                <div>
                  <span>{i+1}. </span>
                  <span>{ticket.departureCity} - {ticket.arrivalCity}</span>
                </div>
                <div className="m-10">{ticket.price} ₴</div>
              </li>
            ))}
          </ul>
        </div>)
        : <div className="emptyBasket">
            <p>— Your basket is empty —</p>
        </div>
      }
    </div>
  )
})

export default Cart;
