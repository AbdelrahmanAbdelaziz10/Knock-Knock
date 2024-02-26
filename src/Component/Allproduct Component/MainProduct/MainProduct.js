import React from "react";
import OneProduct from "../../Home Components/AllServes/OneProduct";
import { Col, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import PaginationCom from "../../Common Component/Pagination/Pagination";

const MainProduct = ({ getPage, product }) => {
  const { t } = useTranslation();

  return (
    <div className="main_product">
      <Container>
        <div className="row servies mt-5">
          {product?.data?.length >= 1 ? (
            product?.data?.map((product, idx) => (
              <Col
                key={product.id}
                xs={6}
                lg={3}
                md={4}
                sm={6}
                className="col-lg-3 col-md-4 mb-4"
              >
                <OneProduct
                  image={`https://dashboard.knock-knock.ae/${product.image}`}
                  name_ar={product.name_ar}
                  name_en={product.name_en}
                  prise={product.price}
                  discount={product.discount}
                  link={`/product/${product.id}`}
                />
              </Col>
            ))
          ) : (
            <h1 className="text-center">{t("no_products")}</h1>
          )}
        </div>
        <PaginationCom total={product?.total} getPage={getPage} />
      </Container>
    </div>
  );
};

export default MainProduct;
