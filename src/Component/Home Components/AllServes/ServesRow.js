import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import useFetch from '../../../hooks/useFetch'
import { useTranslation } from 'react-i18next'
import OneServe from './OneServe'
import OneProduct from './OneProduct'

export const ServesRow = ({ title, link }) => {
  const { t } = useTranslation()
  const { data: serves } = useFetch("/api/v1/services/get-all")
  const { data: product } = useFetch("/api/v1/products/get-all-products")
  const allProduct = product?.data?.data
  const allserves = serves?.data?.data

  return (
    <div className="privete_servies mb-3">
      <div className="row my-3 head">
        <Col xs={8} lg={9} md={8} sm={8} className="">
          <h4>{title}</h4>
        </Col>
        <Col xs={4} lg={3} md={4} sm={4} className="">
          <Link to={link} className="link see_more"><span>{t("home_see_more")}</span></Link>
        </Col>
      </div>
      {
        title === t("home_category3") ? (
          <div className="row servies">
            {allProduct && allProduct.slice(0, 4).map((product) => (
              <Col xs={6} lg={3} md={4} sm={6} className=" mb-5" key={product?.id}>
                <OneProduct productObj={product} image={`https://dashboard.knock-knock.ae/${product.image}`} name_ar={product.name_ar} name_en={product.name_en} prise={product.price} discount={product.discount} link={`/product/${product?.id}`} />
              </Col>
            ))}
          </div>
        ) : (
          <div className="row servies">
            {allserves && allserves.map((serve) => (
              <OneServe key={serve?.id} image={`https://dashboard.knock-knock.ae/${serve?.image}`} link={`/serves/${serve?.id}`} name_ar={serve?.name_ar} name_en={serve.name_en} />
            ))}
          </div>
        )
      }
    </div>
  )
}
