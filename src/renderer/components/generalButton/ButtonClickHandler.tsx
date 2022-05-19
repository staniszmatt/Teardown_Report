/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import './ButtonClickHandler.css';

interface NewButton {
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>, props: any) => void;
  buttonName: string;
  props?: any;
}

export default function ButtonHandle(btnProps: NewButton) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    btnProps.ClickHandler(event, btnProps)
  }

  console.log('Checking gen button: ', btnProps);

  return (
    <button className="btn-style" onClick={(event) => {handleClick(event)}} type="button">
      {btnProps.buttonName}
    </button>
  )
}
