import React, { useContext } from 'react';
import InfoVeneciaHome from '../InfoVeneciaHome/InfoVeneciaHome';
import ReserveHome from '../Reserve/ReserveHome';
import './_background-home.scss';

const Background = () => {

  return (
    <>
    <div className="conteiner-background">
    <h2>VENECIA</h2>
    </div>
    <InfoVeneciaHome/>
    <ReserveHome/>
    </>
  );
};

export default Background; 
