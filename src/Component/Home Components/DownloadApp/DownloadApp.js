import React from 'react'
import './DownloadApp.css'
import { Link } from 'react-router-dom';
import downloadimg from '../../../images/download.jpg';
import googleplay from '../../../images/googleplay.png';
import appstore from '../../../images/appstore.png';
import { Col } from 'react-bootstrap';

const Downloadapp = () => {
  return (
    <>
            <section className="download mb-3">
        <div className="container ">
            <div className="row ">
                <Col xs={12} lg={7} md={8} sm={12} className="col-lg-7 col-md-8 mt-lg-5 ">
                    <div className="text">
                        <span>
                            معك اينما كنت
                        </span>
                        <h2>
                            حمل التطبيق الان
                        </h2>
                        <p>
                            يمكنك الحجز وإدارة حجزك من خلال التطبيق ببضع خطوات بسيطة. بالإضافة إلى رؤية جميع تفاصيل
                            العاملة المخصصة لك.
                        </p>
                    </div>
                    <div className=" row img_download">
                        <Col xs={6} lg={6} md={6} sm={6} className=" download_img">
                            <Link to="">
                                <img src={googleplay} alt="google play"/>
                            </Link>
                        </Col>
                        <Col xs={6} lg={6} md={6} sm={6} className=" download_img">
                            <Link to="">
                                <img src={appstore} alt="App Store"/>
                            </Link>
                        </Col>
                    </div>
                </Col>
                <Col xs={12} lg={5} md={4} sm={12}  className="col-lg-5 col-md-4">
                    <div className="mobile_pic pt-5">
                        <img src={downloadimg} alt="mobile_img"/>
                    </div>
                </Col>
            </div>

        </div>
    </section>
    </>
  )
}

export default Downloadapp