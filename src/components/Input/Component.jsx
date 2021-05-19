import React from 'react';

const getInputContainerClassName = (className, showAlertTriangle) => {
  const wrapperClassName = `inputContainer ${className ? className : ''}`; 
  return `${wrapperClassName}${showAlertTriangle ? ' has-error' : ''} `
};

const InputComponent = props => {

return(
  <div className={getInputContainerClassName(props.wrapperClassName)}>
    {props.label &&
      <label className='main-input__label' htmlFor={props.id}>
      {props.label}
    </label>
    }
    <input
      id={props.id || props.name}
      onChange={props.onChangeInput}
      value={props.value}

      title=""
      className={props.inputClassName}
      placeholder={props.placeholder}
    />
  </div>
);
  }

export default InputComponent;
