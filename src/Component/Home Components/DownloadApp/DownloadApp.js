import React from 'react'
import './DownloadApp.css'
import { Link } from 'react-router-dom';
import downloadimg from '../../../images/download.jpg';
import googleplay from '../../../images/googleplay.png';
import appstore from '../../../images/appstore.png';

const Downloadapp = () => {
  return (
    <>
            <section className="download">
        <div className="container ">
            <div className="row ">
                <div className="col-lg-7 mt-5">
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
                    <div className="  row">
                        <div className="col-lg-6 download_img">
                            <Link to="">
                                <img src={googleplay} alt="google play"/>
                            </Link>
                        </div>
                        <div className="col-lg-6 download_img">
                            <Link to="">
                                <img src={appstore} alt="App Store"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="mobile_pic pt-5">
                        <img src={downloadimg} alt="mobile_img"/>
                    </div>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Downloadapp