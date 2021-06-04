import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';

import Tickets from './Tickets';
import { Spinner } from '../../components/Spinner';
import { myPlaneTicket } from '../../mobx-store/airPlaneTicket'

const Result = observer( props => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => setTimeout(() => setShowSpinner(false), 3000))

  const { tickets, report } = myPlaneTicket;
  return(
    <div className="flex justC-center">
      {showSpinner 
        ? <Spinner message={report()}/>
        : tickets.length
          ? <Tickets tickets={tickets}/>
          : <Spinner />
      }
    </div>
  )
})

export default Result;
