import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import { ContextLang } from '../../../App';
import { Col, Container, Row } from 'react-bootstrap';

const MainPolicy = () => {
    const { t, i18n } = useTranslation();
    const { selectedLanguage, setSelectedLanguage } = useContext(ContextLang);
  return (
    <div className='main_policy'>
    <Container >
    <Row className='justify-content-center'>
    <Col xs={10} lg={10} md={10} sm={10} >
    <h2 className='text-center'>{t("policy")}</h2>
        <p className='text-center' >Our privacy policy describes how we collect and process your personal information, such as the information you provide through our application. The policy also outlines your rights regarding your personal information, how it is retained, and secured.
<br/>
Communication:
Various communication channels are provided in case of any questions or inquiries about the privacy policy. You can speak to the team through the application, call the specified number, or contact them via email.
<br/>
Updates:
In the event of any changes in the way personal information is processed or in the policy itself, you will be promptly notified via email and the application will be updated.
This is a general summary, and if you need assistance or additional clarification on a specific part of the text, feel free to ask</p>
    </Col>
    </Row>

    </Container>
    </div>
  )
}

export default MainPolicy