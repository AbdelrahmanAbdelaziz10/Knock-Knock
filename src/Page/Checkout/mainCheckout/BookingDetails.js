import React from 'react'
import { Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';

const BookingDetails = () => {
    const { t } = useTranslation();

  return (
    <Col
      xs={12}
      lg={12}
      md={12}
      sm={12}
      className="border booking_details"
    >
      <h4>{t("booking_title")}</h4>
      <div className="row">
        <h6 className="col-lg-5 col-md-12">{t("booking_address")}</h6>
        <p className="col-lg-7 col-md-12">{t("booking_address_add")}</p>
      </div>
      <div className="row">
        <h6 className="col-lg-5">{t("booking_serves")}</h6>
        <p className="col-lg-7">{t("cart_h")}</p>
      </div>
      <div className="row d-flex">
        <h6 className="col-lg-5">{t("booking_phone")}</h6>
        <p className="serves_name col-lg-7">+20115269845</p>
      </div>
    </Col>
  )
}

export default BookingDetails