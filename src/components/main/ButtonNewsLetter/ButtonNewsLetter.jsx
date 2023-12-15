import React, { useState } from "react";
import HealthAndBeautyImage from "./check.svg";

const ButtonNewsLetter = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleClick = () => {
    setSubscribed(true);
  };

  return (
    <>
      <button className={`submit ${subscribed ? "subscribed" : ""}`} onClick={handleClick}>
        {subscribed ? <img src={HealthAndBeautyImage} alt="Success Icon" /> : "Subscribe"}
      </button>
    </>
  );
};

export default ButtonNewsLetter;
