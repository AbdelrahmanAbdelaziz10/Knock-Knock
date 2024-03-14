import React, { useEffect, useState } from "react";
import OneProduct from "../../Home Components/AllServes/OneProduct";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import PaginationCom from "../../Common Component/Pagination/Pagination";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";

const MainProduct = ({ getPage, contentProduct, setContentProduct }) => {
  const { t } = useTranslation();
  const { data: product, setData: setProduct } = useFetch("/api/v1/products/get-all-products");
  const [productSearch, setProductSearch] = useState({
    search: "",
  });
  // console.log(contentProduct)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(
          "https://dashboard.knock-knock.ae/api/v1/search/products",
          productSearch
        );
        setContentProduct(response?.data?.data);
      } catch (error) {
        console.log("error", error);
      }
    }

    if (productSearch.search.trim() !== "") {
      fetchData();
    } else {
      clearSearch();
    }
  }, [productSearch]);

  const clearSearch = async () => {
    // Fetch all data when search content is empty
    const allDataResponse = await axios.get("https://dashboard.knock-knock.ae/api/v1/products/get-all-products");
    setContentProduct(allDataResponse.data.data);
  };


  const handelSearchChange = (e) => {
    setProductSearch({
      ...productSearch,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="main_product py-4">
      <Container>
        <Row className="justify-content-center">
          <Col xs={11} lg={11} md={9} sm={11} className="">
            <input
              className="search_input"
              type="text"
              name="search"
              onChange={handelSearchChange}
              placeholder={t("search")}
            />
          </Col>
        </Row>
        <div className="row servies mt-5">
          {contentProduct?.data?.length >= 1 ? (
            contentProduct?.data?.map((product, idx) => (
              <Col
                key={product.id}
                xs={6}
                lg={3}
                md={4}
                sm={6}
                className="col-lg-3 col-md-4 mb-4"
              >
                <OneProduct
                  productObj={product}
                  image={`https://dashboard.knock-knock.ae/${product.image}`}
                  name_ar={product.name_ar}
                  name_en={product.name_en}
                  prise={product.price}
                  discount={product.discount}
                  link={`/product/${product.id}`}
                  id={product.id}
                />
              </Col>
            ))
          ) : (
            <h1 className="text-center">{t("no_products")}</h1>
          )}
        </div>
        <PaginationCom total={product?.data?.per_page} getPage={getPage} />
      </Container>
    </div>
  );
};

export default MainProduct;
