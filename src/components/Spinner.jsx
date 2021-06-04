import React from 'react';

export const Spinner = ({message}) => (
  <div className="w-100">
    <div className="spin-wrapper">
      <p className="spin-message">{message}</p>
      <div className="spinner" />
    </div>
</div>
);
