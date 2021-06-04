import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import { myCart } from '../mobx-store/cart';

export const CartIcon = observer(() => {
  const { myTicket } = myCart;

  return (
    <li>
      <Link to="/cart">Cart <sup>{myTicket.length}</sup></Link>
    </li>
  )
});
