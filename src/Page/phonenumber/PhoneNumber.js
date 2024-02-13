import React from "react";
import "../Login/Login.css";
import { Link } from "react-router-dom";
import { IoMdExit } from "react-icons/io";

const PhoneNumber = () => {
    return (
        <div class="singup phone_login">
          <div class="container">
            <div class="row login_main mt-4">
              <div class="col-lg-5 col-md-9 ">
                <form
                  class="row form g-3 mb-5 mt-3"
                  method="POST"
                  action="{{route('register.store')}}"
                >
                  <div class=" mb-3 row title">
                    <h5 className="col-lg-10">Log in or sign up </h5>
                    <IoMdExit className="col-lg-2 exit_icon" />

                  </div>
    
                  <div class="col-lg-12 row col-md-12 my-3">
                    <div class="row justify-content-center">
                    <label>Your phone number</label>
                    <div class="mb-2 d-flex">
                            <select class="form-select nationality_code" aria-label="Default select example">
                                <option selected>Egy +20</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                              <input type="number" class="form-control phone_code" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number" />

                          </div>
                    </div>
                  </div>
    
                  <div class="col-12 submit_btn mt-4">
                    <Link type="submit" class="btn mb-4 mx-2 btn-verify" to="/verify">
                      Continue
                    </Link>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    };
export default PhoneNumber

