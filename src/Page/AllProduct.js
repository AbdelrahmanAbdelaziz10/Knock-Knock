import React from 'react'
import NavBar from '../Component/Common Component/NavBar/NavBar'
import Footer from '../Component/Common Component/Footer/Footer'
import MainProduct from '../Component/Allproduct Component/MainProduct/MainProduct'
import Head from '../Component/Common Component/Head/Head'
import head from '../images/head.jpg'
import { i18n } from 'i18next';
import { useTranslation } from 'react-i18next'
const AllProduct = () => {
  const {t,i18n}=useTranslation()
  return (
    <div className='all_product'>
    <NavBar />
    <Head img={head} page={t("all_product_product")} title={t("home_category3")} />
    <MainProduct />
    <Footer />
    </div>
  )
}

export default AllProduct