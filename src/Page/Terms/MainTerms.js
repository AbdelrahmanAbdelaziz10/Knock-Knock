import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import { ContextLang } from '../../App';
import { Col, Container, Row } from 'react-bootstrap';
import './Terms.css'
const MainTerms = () => {
    const { t, i18n } = useTranslation();
    const { selectedLanguage, setSelectedLanguage } = useContext(ContextLang);
  return (
    <div>
        <div className="main_terms">
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} lg={10} md={10} sm={10}>
            <h2 className="text-center">{t("Terms_title")}</h2>
            <p className="">
              {t("Terms_p1")}
            </p>
            <p className="">
              {t("Terms_p2")}
            </p>
            <p className="">
              {t("Terms_p3")}
            </p>
            <p className="">
              {t("Terms_p4")}
            </p>
            <p className="">
              {t("Terms_p5")}
            </p>
            <p className="">
              {t("Terms_p6")}
            </p>
            <p className="">
              {t("Terms_p7")}
            </p>
            <p className="">
              {t("Terms_p8")}
            </p>
            <p className="">
              {t("Terms_p9")}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default MainTerms