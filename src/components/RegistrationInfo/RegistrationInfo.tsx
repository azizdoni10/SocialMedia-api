import React from "react";
import "./RegistrationInfo.scss"
import { Link } from "react-router-dom";

export const RegistrationInfo = () => {
  return (
    <div className="registration">
    <span>
      Don't you have an account? <Link to="/registration">Login</Link>
    </span>
    <p>Sign in with</p>
    <div className="icons-wrapper">
      <a className="reg__link google-link" href="#">
        <img src="./img/icons/google.svg" alt="Google" />
      </a>
      <a className="reg__link google-plus-link" href="#">
        <img src="./img/icons/google-plus.svg" alt="Google Plus" />
      </a>
      <a className="reg__link yandex-link" href="#">
        <img src="./img/icons/yandex.svg" alt="Yandex" />
      </a>
      <a className="reg__link mail-ru-link" href="#">
        <img src="./img/icons/mail-ru.svg" alt="Mail.ru" />
      </a>
    </div>
  </div>
  )
}