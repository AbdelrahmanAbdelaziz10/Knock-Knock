import React from "react";
import OneProduct from "../../Home Components/AllServes/OneProduct";
import product1 from "../../../images//Rectangle 195.svg";
import product2 from "../../../images/Rectangle2.svg";
import product3 from "../../../images/private3.svg";
import product4 from "../../../images/private4.svg";
import { Container } from "react-bootstrap";
import OneServe from "../../Home Components/AllServes/OneServe";
import './MainServes.css'
const MainServes = () => {
  return (
    <div className="main_serves my-4">
      <Container>
        <div className="row servies">
          <OneServe img={product1} link={"/serves_details"}/>
          <OneServe img={product2} link={"/serves_details"} />
          <OneServe img={product3} link={"/serves_details"} />
          <OneServe img={product4} link={"/serves_details"} />
          <OneServe img={product1} link={"/serves_details"} />
          <OneServe img={product2} link={"/serves_details"} />
          <OneServe img={product3} link={"/serves_details"} />
          <OneServe img={product4} link={"/serves_details"} />
          <OneServe img={product1} link={"/serves_details"} />
          <OneServe img={product2} link={"/serves_details"} />
          <OneServe img={product3} link={"/serves_details"} />
          <OneServe img={product4} link={"/serves_details"} />
        </div>
      </Container>
    </div>
  );
};

export default MainServes;
