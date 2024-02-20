import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainOrder = () => {
  return (
    <div className="main_order py-4">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col
            xs={12}
            lg={10}
            md={12}
            sm={12}
            className="row justify-content-center"
          >
            <Col xs={4} lg={2} md={2} sm={4} className="">
              <button className="btn btn_order active">Pending</button>
            </Col>
            <Col xs={4} lg={2} md={2} sm={4} className="">
              <button className="btn btn_order">Finish</button>
            </Col>
            <Col xs={4} lg={2} md={2} sm={4} className="">
              <button className="btn btn_order">Processing</button>
            </Col>
            <Col xs={4} lg={2} md={2} sm={4} className="">
              <button className="btn btn_order">Shipped</button>
            </Col>
            <Col xs={4} lg={2} md={2} sm={4} className="">
              <button className="btn btn_order">Cancelled</button>
            </Col>
          </Col>
        </Row>
        <Row className="">
        <Col xs={12} lg={6} md={6} sm={12} className="">
            <Link to="/booking">
              <Card className="order_card">
                <div className="row order_title">
                  <Col xs={9} lg={9} md={8} sm={9} className="">
                    <h4>Track Order #hjksdnasf</h4>
                  </Col>
                  <Col xs={3} lg={3} md={4} sm={3} className="">
                    <p className="btn btn_pending"> Pending</p>
                  </Col>
                </div>
                <div className="row order_details">
                  <Col xs={8} lg={9} md={7} sm={8} className="">
                    <p className="">
                      Total: <span>20 AED</span>
                    </p>
                  </Col>
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className="">
                      Amount: <span>2</span>
                    </p>
                  </Col>
                </div>
                <div className="row date justify-content-end">
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className=""> 20-10-2023</p>
                  </Col>
                </div>
              </Card>
            </Link>
          </Col>
          <Col xs={12} lg={6} md={6} sm={12} className="">
            <Link to="/booking">
              <Card className="order_card">
                <div className="row order_title">
                  <Col xs={9} lg={9} md={8} sm={9} className="">
                    <h4>Track Order #hjksdnasf</h4>
                  </Col>
                  <Col xs={3} lg={3} md={4} sm={3} className="">
                    <p className="btn btn_pending"> Pending</p>
                  </Col>
                </div>
                <div className="row order_details">
                  <Col xs={8} lg={9} md={7} sm={8} className="">
                    <p className="">
                      Total: <span>20 AED</span>
                    </p>
                  </Col>
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className="">
                      Amount: <span>2</span>
                    </p>
                  </Col>
                </div>
                <div className="row date justify-content-end">
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className=""> 20-10-2023</p>
                  </Col>
                </div>
              </Card>
            </Link>
          </Col>
          <Col xs={12} lg={6} md={6} sm={12} className="">
            <Link to="/booking">
              <Card className="order_card">
                <div className="row order_title">
                  <Col xs={9} lg={9} md={8} sm={9} className="">
                    <h4>Track Order #hjksdnasf</h4>
                  </Col>
                  <Col xs={3} lg={3} md={4} sm={3} className="">
                    <p className="btn btn_pending"> Pending</p>
                  </Col>
                </div>
                <div className="row order_details">
                  <Col xs={8} lg={9} md={7} sm={8} className="">
                    <p className="">
                      Total: <span>20 AED</span>
                    </p>
                  </Col>
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className="">
                      Amount: <span>2</span>
                    </p>
                  </Col>
                </div>
                <div className="row date justify-content-end">
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className=""> 20-10-2023</p>
                  </Col>
                </div>
              </Card>
            </Link>
          </Col>
          <Col xs={12} lg={6} md={6} sm={12} className="">
            <Link to="/booking">
              <Card className="order_card">
                <div className="row order_title">
                  <Col xs={9} lg={9} md={8} sm={9} className="">
                    <h4>Track Order #hjksdnasf</h4>
                  </Col>
                  <Col xs={3} lg={3} md={4} sm={3} className="">
                    <p className="btn btn_pending"> Pending</p>
                  </Col>
                </div>
                <div className="row order_details">
                  <Col xs={8} lg={9} md={7} sm={8} className="">
                    <p className="">
                      Total: <span>20 AED</span>
                    </p>
                  </Col>
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className="">
                      Amount: <span>2</span>
                    </p>
                  </Col>
                </div>
                <div className="row date justify-content-end">
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className=""> 20-10-2023</p>
                  </Col>
                </div>
              </Card>
            </Link>
          </Col>
          <Col xs={12} lg={6} md={6} sm={12} className="">
            <Link to="/booking">
              <Card className="order_card">
                <div className="row order_title">
                  <Col xs={9} lg={9} md={8} sm={9} className="">
                    <h4>Track Order #hjksdnasf</h4>
                  </Col>
                  <Col xs={3} lg={3} md={4} sm={3} className="">
                    <p className="btn btn_pending"> Pending</p>
                  </Col>
                </div>
                <div className="row order_details">
                  <Col xs={8} lg={9} md={7} sm={8} className="">
                    <p className="">
                      Total: <span>20 AED</span>
                    </p>
                  </Col>
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className="">
                      Amount: <span>2</span>
                    </p>
                  </Col>
                </div>
                <div className="row date justify-content-end">
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className=""> 20-10-2023</p>
                  </Col>
                </div>
              </Card>
            </Link>
          </Col>
          <Col xs={12} lg={6} md={6} sm={12} className="">
            <Link to="/booking">
              <Card className="order_card">
                <div className="row order_title">
                  <Col xs={9} lg={9} md={8} sm={9} className="">
                    <h4>Track Order #hjksdnasf</h4>
                  </Col>
                  <Col xs={3} lg={3} md={4} sm={3} className="">
                    <p className="btn btn_pending"> Pending</p>
                  </Col>
                </div>
                <div className="row order_details">
                  <Col xs={8} lg={9} md={7} sm={8} className="">
                    <p className="">
                      Total: <span>20 AED</span>
                    </p>
                  </Col>
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className="">
                      Amount: <span>2</span>
                    </p>
                  </Col>
                </div>
                <div className="row date justify-content-end">
                  <Col xs={4} lg={3} md={5} sm={4} className="">
                    <p className=""> 20-10-2023</p>
                  </Col>
                </div>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainOrder;
