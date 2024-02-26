import React from 'react'
import './HeaderHome.css'
import { FaLocationDot } from "react-icons/fa6";
import { i18n } from 'i18next';
import { useTranslation } from 'react-i18next';

const HeaderHome = () => {
    const {t,i18n}=useTranslation()
  return (
    <header class="header">
        <div class="container row justify-content-center">
            <div class="header_text col-lg-8">
                <h2 className='text-center'>
                {t("h-title")}
                </h2>
                <p className='text-center'>{t("h_p")}</p>
                {/*
                <div class="header_form">
                    <h6>{t("h-search")}</h6>
                     <FaLocationDot  class="fa-solid fa-location-dot"/>
                    <input type="text" placeholder={t("h-input")}/> 
                </div>
                */}
            </div>
        </div>
    </header>
      )
}

export default HeaderHome