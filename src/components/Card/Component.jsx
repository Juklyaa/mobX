import React, { useState } from 'react';

const ShotComponent = () =>
  <div className="shotComponent">
    <div className="itemShotComponent"/>
    <div className="itemShotComponent"/>
    <div className="itemShotComponent"/>
  </div>

const Card = props => {
  const [showInput, setShowInput] = useState(false);
  const handleButtonSelectCity = () => {
    setShowInput(!showInput)
  }


  return (
    <div className="cardWrapper">
      <div className="cardContent" onClick={props.handleModal}>
        <button className="selectOtherBtn" onClick={handleButtonSelectCity}>{props.buttonName}</button>
        <h2>{props.label}</h2>
        { showInput && props.children }
        { !showInput && props.isShort && <ShotComponent/>}
        { !showInput && !props.isShort && 
            <>
              <h2>{props.value}</h2>
              <h3 className="shortName">{props.value.slice(0,3)}</h3>
            </>
        }
      </div>
    </div>
  )
}

export default Card;