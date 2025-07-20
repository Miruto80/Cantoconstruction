// components/SmsButton.jsx
import React from 'react';
import '../assets/css/ButtonSms.css';

const SmsButton = () => {
  const phoneNumber = '+584245127864';
  const message = encodeURIComponent("Hi, I’m interested in your construction services.");

  return (
    <a
      href={`sms:${phoneNumber}?&body=${message}`}
      className="sms-button-fixed-center"
    >
      <i className="fa-solid fa-message"></i> Text Us Now
    </a>
  );
};

export default SmsButton;
