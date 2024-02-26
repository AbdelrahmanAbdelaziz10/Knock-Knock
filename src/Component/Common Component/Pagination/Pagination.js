import React, { useState } from 'react'
import './pagination.css'
import ReactPaginate from 'react-paginate'
import { Col, Row } from 'react-bootstrap'
import { i18n } from 'i18next';
import { useTranslation } from 'react-i18next';
import useFetch from '../../../hooks/useFetch';
import axios from 'axios';
const PaginationCom = ({total,getPage}) => {
    const {t,i18n}= useTranslation()
    const handlePageClick=(data)=>{
    getPage(data.selected+1)
    
    }
  return (
    <Row>
    <Col>
    <ReactPaginate
    breakLabel="..."
    nextLabel={t("pagination_next")}
    onPageChange={handlePageClick}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    pageCount={total}
    previousLabel={t("pagination_previous")}
    containerClassName={'pagination justify-content-center p-3'}
    pageClassName={"page-item"}
    pageLinkClassName={"page-link"}
    previousClassName={'page-item'}
    nextClassName={'page-item'}
    previousLinkClassName={'page-link'}
    nextLinkClassName={'page-link'}
    breakClassName={'page-item'}
    breakLinkClassName={'page-link'}
    activeClassName={'active'}
  />
  </Col>
  </Row>
  )
}

export default PaginationCom