import React from 'react'
import './HeaderHome.css'
import { FaLocationDot } from "react-icons/fa6";
import { i18n } from 'i18next';
import { useTranslation } from 'react-i18next';

const HeaderHome = () => {
    const {t,i18n}=useTranslation()
  return (
    <header className="header">
        <div className="container row justify-content-center">
            <div className="header_text col-lg-8">
                <h2 className='text-center'>
                {t("h-title")}
                </h2>
                <p className='text-center'>{t("h_p")}</p>
                {/*
                <div className="header_form">
                    <h6>{t("h-search")}</h6>
                     <FaLocationDot  className="fa-solid fa-location-dot"/>
                    <input type="text" placeholder={t("h-input")}/> 
                </div>
                */}
            </div>
        </div>
    </header>
      )
}

export default HeaderHome