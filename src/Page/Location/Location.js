import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { IoMdExit } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Location = ({test,setTest}) => {

    return (
        <div class= {test===true?("display_none"):("singup phone_login")}>
          <div class="container">
            <div class="row login_main mt-4">
              <Col xs={11} lg={5} md={8} sm={11} class="col-lg-5 col-md-8 ">
                <form
                  class="row form g-3 mb-5 mt-3"
                >
                  <div class=" mb-3 row title">
                  <Col xs={10} lg={10} md={10} sm={11} >
                  <h5 className=" ">Your location</h5>
                  </Col>
                  <Col xs={2} lg={2} md={2} sm={2} >
                  <IoMdExit className=" exit_icon"  onClick={()=>setTest(true)}/>
                  </Col>
                  </div>
    
                  <div class="col-lg-12 row col-md-12 my-3">
                    <div class="row justify-content-center">
                    <label className="mb-3">ADDRESS DETAILS</label>
                    <div class=" d-flex justify-content-center">
                              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ADDRESS DETAILS" />

                          </div>
                    </div>
                  </div>
    
                  <div class="col-12 submit_btn mt-4">
                    <Link type="submit" class="btn mb-4 mx-2 btn-verify" to="/booking">
                      Save & Continue
                    </Link>

                  </div>
                </form>
              </Col>
            </div>
          </div>
        </div>
  )
}

export default Location