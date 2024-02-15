import React from 'react'
import './WhyUs.css'
import star from '../../../images/star.svg'
import calendar from '../../../images/calendar (1).svg'
import topQuality from "../../../images/topquality.PNG";
import  goApp from "../../../images/gooapp.PNG"
import { Col } from 'react-bootstrap';
const WhyUs = () => {
  return (
            <section className="Why-Us py-5">
        <div className="container">
            <div className="row title mb-4">
                <h4 className=" text-center">
                    هناك العديد من الأسباب التي تدفعك للثقة بجست لايف!
                </h4>
                <p className="text-center">إليك أفضل 4 أسباب!</p>
            </div>
            <div className="row ">
                <Col xs={6} lg={3} md={6} sm={6} className="">
                    <div className="card">
                        <div className="why-us-icon">
                            <img src={star} alt="star"/>
                        </div>
                        <div className="why-us-text">
                            <h5>أفضل الأخصائيون</h5>
                            <p>خبراؤنا ذوو ثقة ومدربون بشكل احترافي، وحاصلون على تقييمٍ 4.78 من 5!</p>
                        </div>
                    </div>
                </Col>
                <Col xs={6} lg={3} md={6} sm={6} className="">
                    <div className="card">
                        <div className="why-us-icon">
                            <img src={calendar } alt=""/>
                        </div>
                        <div className="why-us-text">
                            <h5>خدمة في اليوم نفسه

                            </h5>
                            <p>احجز جلستك في أقل من 60 ثانية، كما يمكنك تحديد موعداً في اليوم نفسه.</p>
                        </div>
                    </div>
                </Col>
                <Col xs={6} lg={3} md={6} sm={6} className="">
                    <div className="card">
                        <div className="why-us-icon">
                            <img className="mt-3" src={topQuality}alt=""/>
                        </div>
                        <div className="why-us-text">
                            <h5 className="pt-4">خدمة عالية الجود وتستحق الثمن</h5>
                            <p>يتم تجهيز خبراءنا بأفضل المعدات والأدوات، ويتم تسعير الخدمات دائماً متخذين مستخدمي
                                خدماتنا بعين الاعتبار.</p>
                        </div>
                    </div>
                </Col>
                <Col xs={6} lg={3} md={6} sm={6} className="">
                    <div className="card">
                        <div className="why-us-icon">
                            <img src={goApp} alt=""/>
                        </div>
                        <div className="why-us-text">
                            <h5 className="pt-4">تطبيقٌ متميزٌ</h5>
                            <p>أن يكون التطبيق متميزاً يعني أنه يشمل مجموعة واسعة جداً من الخدمات المنزلية، ولذلك نحن
                                نلبي جميع احتياجاتك!</p>
                        </div>
                    </div>
                </Col>
            </div>
        </div>

    </section>
  )
}

export default WhyUs