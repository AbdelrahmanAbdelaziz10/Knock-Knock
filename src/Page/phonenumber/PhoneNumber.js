import React from "react";
import "../Login/Login.css";
import { Link } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import { Col } from "react-bootstrap";

const PhoneNumber = ({test,setTest}) => {
    return (
        <div class="singup phone_login">
          <div class="container">
            <div class="row login_main mt-4">
              <Col xs={11} lg={6} md={10} sm={11} class="col-lg-5 col-md-8 ">
                <form
                  class="row form g-3 mb-5 mt-3"
                >
                  <div class=" mb-3 row title">
                  <Col xs={10} lg={10} md={10} sm={11} >
                  <h5 className=" ">Log in or sign up </h5>
                  </Col>
                  <Col xs={2} lg={2} md={2} sm={2} >
                  <IoMdExit className=" exit_icon" onClick={()=>setTest(true)}/>
                  </Col>
                  </div>
    
                  <div class="col-lg-12 row col-md-12 my-3">
                    <div class="row justify-content-center">
                    <label className="mb-3">Your phone number</label>
                    <div class=" d-flex justify-content-center">
                            <select class="form-select nationality" aria-label="Default select example">
                                <option selected>Egy +20</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                              <input type="number" class="form-control phone" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number" />

                          </div>
                    </div>
                  </div>
    
                  <div class="row justify-content-center submit_btn mt-4">
                    <Link type="submit" class="btn mb-4 mx-2 btn-verify" to="/verify">
                      Continue
                    </Link>

                  </div>
                </form>
              </Col>
            </div>
          </div>
        </div>
      );
    };
export default PhoneNumber

