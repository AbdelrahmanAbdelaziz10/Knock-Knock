import React from 'react'
import './Serves.css'
import clean from '../../../images/cleaning (1).svg'
import technical from '../../../images/technical-person.svg'
import air_condition from '../../../images/air-conditioner.svg'
import barber from '../../../images/barber.svg'
import fitness from '../../../images/fitness.svg'
import pest from '../../../images/pest-control.svg'
import baby from "../../../images/baby-worker.svg"
import t_person from "../../../images/technical-person.svg"
import air from "../../../images/air-conditioner.svg"
import { FaVanShuttle } from "react-icons/fa6";

export const Serves = () => {
  return (
    <section className="Servies py-5">
        <div className="container">
            <div className="row title mb-4">
                <h4 className=" text-center">
                    اترك قائمة مهامك لخبرائنا!
                </h4>
                <p className="text-center">
                    تفقّد بعض أفضل خدماتنا المنزلية:
                </p>
            </div>
            <div className="row servies_div">
                <div className="servies_card">
                    <div className="card_img ">
                        <img src={clean} alt=""/>
                    </div>
                    <div className="card_head">
                        <p> عمال نظافة</p>
                    </div>
                </div>
                <div className="servies_card">
                    <div className="card_img ">
                        <img src={technical} alt="technical person"/>
                    </div>
                    <div className="card_head">
                        <p>عمالة فنية</p>
                    </div>
                </div>
                <div className="servies_card">
                    <div className="card_img ">
                    <FaVanShuttle className="fa-solid fa-truck"/>
                    </div>
                    <div className="card_head">
                        <p>مركبات لنقل المواد</p>
                    </div>
                </div>
                <div className="servies_card">
                    <div className="card_img ">
                        <img src={air_condition} alt=""/>
                    </div>
                    <div className="card_head">
                        <p>صيانة للمكيفات</p>
                    </div>
                </div>
                <div className="servies_card">
                    <div className="card_img ">
                        <img src={barber} alt=""/>
                    </div>
                    <div className="card_head">
                        <p> صالونك المنزلي</p>
                    </div>
                </div>
                <div className="servies_card">
                    <div className="card_img ">
                        <img src={fitness} alt=""/>
                    </div>
                    <div className="card_head">
                        <p>مدرب خاص</p>
                    </div>
                </div>
                <div className="servies_card">
                    <div className="card_img ">
                        <img src={pest} alt=""/>
                    </div>
                    <div className="card_head">
                        <p>مكافحة الحشرات</p>
                    </div>
                </div>
                <div className="servies_card">
                    <div className="card_img ">
                        <img src={baby} alt="baby seater"/>
                    </div>
                    <div className="card_head">
                        <p>جليسة اطفال</p>
                    </div>
                </div>
                <div className="servies_card">
                    <div className="card_img ">
                        <img src={t_person} alt=""/>
                    </div>
                    <div className="card_head">
                        <p>كوافير نسائي</p>
                    </div>
                </div>
                <div className="servies_card">
                    <div className="card_img ">
                        <img src={air} alt=""/>
                    </div>
                    <div className="card_head">
                        <p> تنظيف المخازن</p>
                    </div>
                </div>
            </div>

        </div>
    </section>  )
}
