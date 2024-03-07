import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../AllServes/AllServes.css";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ContextLang, ToggleLoginContext } from "../../../App";
const OneProduct = ({ image, name_ar, prise, discount, link, name_en }) => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useContext(ContextLang);
  const { toggleLogin, saveToggleLogin } = useContext(ToggleLoginContext);

  console.log(link);
  return (
    <>
            {toggleLogin === true ? (
    <div className="card one_Product">
      <div className="card_image_product">
        <img src={image} alt="" />
      </div>
      <div className="card_text_product">
        {selectedLanguage === "en" ? <p>{name_en}</p> : <p>{name_ar}</p>}
        <h6>
          {prise} {t("price")}
          <span>{discount} %</span>
        </h6>
          <Link to={link} className="btn btn-deteils">
            {t("all_product_product_btn")}
          </Link>
          </div>
    </div>
        ) : (    <div className="card log_out_card one_Product">
      <div className="card_image_product">
        <img src={image} alt="" />
      </div>
      <div className="card_text_product">
        {selectedLanguage === "en" ? <p>{name_en}</p> : <p>{name_ar}</p>}
        <h6>
          {prise} {t("price")}
          <span>{discount} %</span>
        </h6>

          </div>
    </div>)}

    </>

  );
};

export default OneProduct;
