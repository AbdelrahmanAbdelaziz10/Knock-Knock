import React from "react";
import OneProduct from "../../Home Components/AllServes/OneProduct";
import product1 from "../../../images//Rectangle 195.svg";
import product2 from "../../../images/Rectangle2.svg";
import product3 from "../../../images/private3.svg";
import product4 from "../../../images/private4.svg";
import { Container } from "react-bootstrap";
import OneServe from "../../Home Components/AllServes/OneServe";
import "./MainServes.css";
import useFetch from "../../../hooks/useFetch";
import { Serves } from './../../Home Components/Serves/Serves';
const MainServes = () => {
  const { data: servies } = useFetch("/api/v1/services/get-all");
  console.log(servies);
  return (
    <div className="main_serves my-4">
      <Container>
        <div className="row servies">
        {/* <h1>{servies.data.data[0].name_ar}</h1>  */}
           {/* {servies && servies?.data && servies?.data?.data&& servies?.data?.data?.map((s, idx) => {
            return (
        <OneServe image={`https://dashboard.knock-knock.ae/${s.image}`} key={s.id} name_ar={s.name_ar} name_en={s.name_en}  />

            );
          })} */}
          <OneServe image={product2} link={"/serves_details"}  name_ar={"منتج واحد"} name_en={"product one"}/>
          <OneServe image={product3} link={"/serves_details"} name_ar={"منتج واحد"} name_en={"product one"} />
          <OneServe image={product4} link={"/serves_details"} name_ar={"منتج واحد"} name_en={"product one"} />
          <OneServe image={product1} link={"/serves_details"} name_ar={"منتج واحد"} name_en={"product one"} />
          <OneServe image={product2} link={"/serves_details"} name_ar={"منتج واحد"} name_en={"product one"} />
          <OneServe image={product3} link={"/serves_details"} name_ar={"منتج واحد"} name_en={"product one"} />
          <OneServe image={product4} link={"/serves_details"} name_ar={"منتج واحد"} name_en={"product one"} />
          <OneServe image={product1} link={"/serves_details"} name_ar={"منتج واحد"} name_en={"product one"} />
          <OneServe image={product2} link={"/serves_details"} name_ar={"منتج واحد"} name_en={"product one"} />
          <OneServe image={product3} link={"/serves_details"} name_ar={"منتج واحد"} name_en={"product one"} />
          <OneServe image={product4} link={"/serves_details"} name_ar={"منتج واحد"} name_en={"product one"} />
        </div>
      </Container>
    </div>
  );
};

export default MainServes;
