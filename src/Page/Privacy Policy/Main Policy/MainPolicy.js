import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ContextLang } from "../../../App";
import { Col, Container, Row } from "react-bootstrap";

const MainPolicy = () => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useContext(ContextLang);
  return (
    <div className="main_policy">
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} lg={10} md={10} sm={10}>
            <h2 className="text-center">{t("policy")}</h2>
            <p className="text-center">
              {t("Policy_p1")}
              <br />
              {t("Policy_p2")}

              <br />
              {t("Policy_p3")}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainPolicy;
