import React from "react";
import "../Login/Login.css";
import logo from "../../images/Logo.png";
import { Link } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import { Col } from "react-bootstrap";

const Verify = () => {
  return (
    <div class="login Verify">
      <div class="container">
        <div class="row login_main mt-4">
          <Col xs={11} lg={5} md={7} sm={11} class="">
            <form
              class="row form g-3 mb-5 mt-3">
            {/* <IoMdExit class="fa-solid fa-x"/> */}
              <div class="form_head text-center mb-3">
                <img class="" src={logo} alt="" />
                <h4> Verify Account</h4>
              </div>

              <div class="col-lg-12 row col-md-12 my-3">
                <div class="row justify-content-center">
                  <input
                    type="number"
                    class="form-control-verify col-2"
                    id="inputEmail"
                    name="Phone"
                    placeholder="5"
                  />
                  <input
                    type="number"
                    class="form-control-verify col-2"
                    id="inputEmail"
                    name="Phone"
                    placeholder="5"
                  />
                  <input
                    type="number"
                    class="form-control-verify col-2"
                    id="inputEmail"
                    name="Phone"
                    placeholder="5"
                  />
                  <input
                    type="number"
                    class="form-control-verify col-2"
                    id="inputEmail"
                    name="Phone"
                    placeholder="5"
                  />
                </div>
              </div>

              <div class="col-12 submit_btn mt-4">
                <Link to="/" type="submit" class="btn mb-4 mx-2 btn-verify">
                  Verify
                </Link>
                <Link to="phone" type="submit" class="btn mb-4 mx-2 send_again">
                  Send Again
                </Link>
              </div>
            </form>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Verify;
