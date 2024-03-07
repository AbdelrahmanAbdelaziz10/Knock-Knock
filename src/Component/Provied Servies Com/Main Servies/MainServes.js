import React from "react";
import OneProduct from "../../Home Components/AllServes/OneProduct";
import product1 from "../../../images//Rectangle 195.svg";
import product2 from "../../../images/Rectangle2.svg";
import product3 from "../../../images/private3.svg";
import product4 from "../../../images/private4.svg";
import { Col, Container, Row } from "react-bootstrap";
import OneServe from "../../Home Components/AllServes/OneServe";
import "./MainServes.css";
import useFetch from "../../../hooks/useFetch";
import { Serves } from './../../Home Components/Serves/Serves';
import PaginationCom from "../../Common Component/Pagination/Pagination";
import ServesComponent from "../../Home Components/Serves/ServesComponent";
const MainServes = ({getPage}) => {
  const { data: servies } = useFetch("/api/v1/services/get-all");
  // console.log(servies?.data?.total);
  return (
    <div className="main_serves py-4">
      <Container>
        <div className="row Servies allservice">
        {/* <h1>{servies.data.data[0].name_ar}</h1>   */}
            {servies && servies?.data && servies?.data?.data&& servies?.data?.data?.map((s, idx) => {
            return (
              <>
              <ServesComponent image={`https://dashboard.knock-knock.ae/${s.image}`} key={s.id} link={`/serves/${s.id}`} name_ar={s.name_ar} name_en={s.name_en} />

        {/* <OneServe image={`https://dashboard.knock-knock.ae/${s.image}`} key={s.id} name_ar={s.name_ar} name_en={s.name_en} link={`${s.id}`} /> */}

              </>

            );
          })}
      

          <Row>
            <Col>
            <PaginationCom total={servies?.data?.total} getPage={getPage} />
            </Col>
                      </Row>

        </div>
      </Container>
    </div>
  );
};

export default MainServes;
