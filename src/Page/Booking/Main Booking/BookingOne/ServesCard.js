import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";

export const ServesCard = ({ img, title, prag, price }) => {
  return (
    <Card className="book_card ">
      <div className="row add_serves">
        <Col xs={4} lg={3} md={4} sm={4}>
          <div className="serv_img">
            <img src={img} alt="" />
          </div>
        </Col>
        <Col xs={8} lg={9} md={8} sm={8}>
          <div className="serv_text ">
            <h6>{title}</h6>
            <p>{prag}</p>
            <Row>
            <Col xs={5} lg={6} md={6} sm={5}>
            <span>AED {price}</span>
            </Col>
            <Col xs={7} lg={6} md={6} sm={7} className="d-flex">
              <button className=" btn btn_decrease">
                <IoRemoveOutline className="add_icon" />
              </button>
              <span className="">1</span>
              <button className=" btn btn_decrease">
                <IoAddOutline className="add_icon" />
              </button>
            </Col>
            </Row>

          </div>
        </Col>
      </div>
    </Card>
  );
};
