import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { myPlaneTicket } from '../../mobx-store/airPlaneTicket'

import InputComponent from './Component';

const InputContainer = observer(props => {

  const [isPopupVisible, setPopupVisible] = useState(false)

  const handleAlertTriangleMouseEnter = () =>
    setPopupVisible(true);

  const handleAlertTriangleMouseLeave = () =>
    setPopupVisible(false);

  const handleInput = event => {
    const { value } = event.target;
    props.setValue(value);
  }

    return (
      <InputComponent
        {...props}

        onAlertTriangleMouseEnter={handleAlertTriangleMouseEnter}
        onAlertTriangleMouseLeave={handleAlertTriangleMouseLeave}
        onChangeInput={handleInput}
      />
    );
});

export default InputContainer;
