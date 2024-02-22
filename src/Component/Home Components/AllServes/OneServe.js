import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ContextLang } from "../../../App";

const OneServe = ({ image, name_ar,link, name_en }) => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useContext(ContextLang);

  return (
    <Col xs={6} lg={3} md={3} sm={6} className="text-center">
      <div className="servies_image">
        <Link to={link} className="link">
          <img src={image} alt="" />
          {selectedLanguage === "en" ? <p>{name_en}</p> : <p>{name_ar}</p>}
        </Link>
      </div>
    </Col>
  );
};

export default OneServe;
