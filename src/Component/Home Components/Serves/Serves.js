import React from 'react'
import './Serves.css'
import { Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { ServesRow } from '../AllServes/ServesRow'
import useFetch from '../../../hooks/useFetch'
import ServesComponent from './ServesComponent'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const Serves = () => {
    const {t,i18n} = useTranslation()
    const {data: serves}=useFetch("/api/v1/services/get-all")
    const allserves=serves?.data?.data
// console.log(allserves)


  return (
    <section className="Servies serves_div allservice py-5">
        <div className="container">
            <div className="row title mb-4">
                <h4 className=" text-center">
                {t("home_serve_title")}
                </h4>
                <p className="text-center">
                {t("home_serve_p")}
                </p>
            </div>
            <div className="row my-3 head">
        <Col xs={8} lg={9} md={8} sm={8} className="">
            <h4>
                
            </h4>
        </Col>
        <Col xs={4} lg={3} md={4} sm={4} className="">
            <Link to="/serves" className="link see_more" > <span>{t("home_see_more")}</span></Link>
        </Col>

    </div>
            <div className="row servies_div  justify-content-lg-start">
        
            { allserves?.slice(0, 5).map((serve,index)=>{
                return(
                    <ServesComponent key={serve.id} image={`https://dashboard.knock-knock.ae/${serve.image}`} link={`/serves/${serve?.id}`} name_ar={serve.name_ar} name_en={serve.name_en} />

                )
            })}

            </div>
            <ServesRow title={t("home_category3")} link={"/product"} className="productRow " />

        </div>
    </section>  )
}
