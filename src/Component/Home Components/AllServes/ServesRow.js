import React from 'react'
import { Link } from 'react-router-dom'
import OneServe from './OneServe'
import OneProduct from './OneProduct'
import { Col } from 'react-bootstrap'
import useFetch from '../../../hooks/useFetch'
import { useTranslation } from 'react-i18next'
export const ServesRow = ({title,link}) => {
const {t,i18n}=useTranslation()
const {data: serves}=useFetch("/api/v1/services/get-all")
const {data: product}=useFetch("/api/v1/products/get-all-products")
const allProduct=product?.data?.data
const allserves=serves?.data?.data
  return (
    <div className="privete_servies mb-3">
    <div className="row my-3 head">
        <Col xs={9} lg={9} md={9} sm={9} className="">
            <h4>
                {title}
            </h4>
        </Col>
        <Col xs={3} lg={3} md={3} sm={3} className="">
            <Link to={link} className="link see_more" > <span>{t("home_see_more")}</span></Link>
        </Col>

    </div>
    {
        title===t("home_category3")? (
            <div className="row servies">
            {allProduct && allProduct?.map((product)=>{
                if(product.id<=4){
                    return (
                        <Col xs={6} lg={3} md={4} sm={6} className=" mb-5">
                        <OneProduct image={`https://dashboard.knock-knock.ae/${product.image}`} name_ar={product.name_ar} name_en={product.name_en} prise={product.price} discount={product.discount} link={`/product/${product.id}`} />

                        </Col>

                    )
                }
            })}

            </div>
        ):(       
            <div className="row servies">
            {allserves && allserves?.map((serve)=>{
                if(serve.id<=4){
                    return (
                        <OneServe image={`https://dashboard.knock-knock.ae/${serve.image}`} link={`/serves/${serve.id}`} name_ar={serve.name_ar} name_en={serve.name_en}/>
                    )
                }
            })}
    </div>)
    }

{/* 
        <div className="col-lg-3 text-center">
            <div className="servies_image">
                <Link to="" className="link">
                    <img src={Rectangle1} alt=""/>
                    <p>Hire a cleaning worker</p>
                </Link>

            </div>
        </div> 
        <div className="col-lg-3 text-center">
            <div className="servies_image">
                <Link to="" className="link">
                    <img src={Rectangle2}alt=""/>
                    <p>Hire technical labor</p>
                </Link>
            </div>
        </div>
        <div className="col-lg-3 text-center">
            <div className="servies_image">
                <Link to="" className="link">
                    <img src={private3} alt=""/>
                    <p>
                        Material transportation <br/> vehicle rental
                    </p>
                </Link>
            </div>
        </div>
        <div className="col-lg-3 text-center">
            <div className="servies_image">
                <Link to="" className="link">
                    <img src={private4} alt=""/>
                    <p>
                        Air conditioning <br/> maintenance contracts
                    </p>
                </Link>

            </div>
        </div>
        */}

</div> 
 )
}
