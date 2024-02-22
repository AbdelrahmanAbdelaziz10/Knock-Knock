import React, { useEffect } from 'react'
import OneProduct from '../../Home Components/AllServes/OneProduct'
import product1 from "../../../images/product1.svg"
import product2 from "../../../images/product2.svg"
import product3 from "../../../images/product3.svg"
import product4 from "../../../images/product4.svg"
import private3 from "../../../images/private3.svg";
import { Col, Container } from 'react-bootstrap'
import useFetch from '../../../hooks/useFetch'
import axios from 'axios'
import { i18n } from 'i18next';
import { useTranslation } from 'react-i18next'

const MainProduct = () => {
  const {t,i18n}=useTranslation()
  const product =useFetch("/api/v1/categories/get-product-categories/1")
  // const postData= async()=>{
  //   const postproduct= axios.post('https://dashboard.knock-knock.ae/api/v1/products/get-products-by-category', {
  //     category_id:'1'
  //   })
  //   console.log(postproduct)

  // }

  console.log(product)
  return (
    <div className='main_product'>
    <Container>
    <div className="row servies mt-5">
            <Col xs={6} lg={3} md={4} sm={6} className="col-lg-3 col-md-4 mb-4">
            <OneProduct img={product1} name={t("all_product_product1_name")} prise={"40"} discount={"30%"} link={"/productdeteils"} />
            </Col>
            <Col xs={6} lg={3} md={4} sm={6} className="col-lg-3 col-md-4 mb-4">
            <OneProduct img={product2} name={t("all_product_product2_name")} prise={"10"} discount={"30%"} link={"/productdeteils"} />
            </Col>
            <Col xs={6} lg={3} md={4} sm={6} className="col-lg-3 col-md-4 mb-4">
            <OneProduct img={product3} name={t("all_product_product3_name")} prise={"5"} discount={"30%"} link={"/productdeteils"} />
            </Col>
            <Col xs={6} lg={3} md={4} sm={6} className="col-lg-3 col-md-4 mb-4">
            <OneProduct img={product4} name={t("all_product_product4_name")} prise={"5"} discount={"30%"} link={"/productdeteils"} />
            </Col>
            <Col xs={6} lg={3} md={4} sm={6} className="col-lg-3 col-md-4 mb-4">
            <OneProduct img={product1} name={t("all_product_product1_name")} prise={"40"} discount={"30%"} link={"/productdeteils"} />
            </Col>
            <Col xs={6} lg={3} md={4} sm={6} className="col-lg-3 col-md-4 mb-4">
            <OneProduct img={product2} name={t("all_product_product2_name")} prise={"10"} discount={"30%"} link={"/productdeteils"} />
            </Col>
            <Col xs={6} lg={3} md={4} sm={6} className="col-lg-3 col-md-4 mb-4">
            <OneProduct img={product3} name={t("all_product_product3_name")} prise={"5"} discount={"30%"} link={"/productdeteils"} />
            </Col>
            <Col xs={6} lg={3} md={4} sm={6} className="col-lg-3 col-md-4 mb-4">
            <OneProduct img={product4} name={t("all_product_product4_name")} prise={"5"} discount={"30%"} link={"/productdeteils"} />
            </Col>
            <Col xs={6} lg={3} md={4} sm={6} className="col-lg-3 col-md-4 mb-4">
            <OneProduct img={product1} name={t("all_product_product1_name")} prise={"40"} discount={"30%"} link={"/productdeteils"} />
            </Col>
            <Col xs={6} lg={3} md={4} sm={6} className="col-lg-3 col-md-4 mb-4">
            <OneProduct img={product2} name={t("all_product_product2_name")} prise={"10"} discount={"30%"} link={"/productdeteils"} />
            </Col>
            <Col xs={6} lg={3} md={4} sm={6} className="col-lg-3 col-md-4 mb-4">
            <OneProduct img={product3} name={t("all_product_product3_name")} prise={"5"} discount={"30%"} link={"/productdeteils"} />
            </Col>
            <Col xs={6} lg={3} md={4} sm={6} className="col-lg-3 col-md-4 mb-4">
            <OneProduct img={product4} name={t("all_product_product4_name")} prise={"5"} discount={"30%"} link={"/productdeteils"} />
            </Col>
            
            </div>
    </Container>

    </div>

  )
}

export default MainProduct