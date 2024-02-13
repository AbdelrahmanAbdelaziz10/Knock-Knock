import React from 'react'
import '../Login/Login.css'
import logo from '../../images/Logo.png'
import { Link } from 'react-router-dom'
export const SingUp = () => {
  return (
    <div class="login singup">
        <div class="container">
            <div class="row login_main mt-4">
                <div class="col-lg-5 col-md-9 ">
                    <form class="row form g-3  mt-3">
                        <i class="fa-solid fa-x"></i>
                        <div class="form_head text-center mb-3">
                            <img class="" src={logo} alt="" />
                            <h4> Sing Up</h4>
                        </div>
                        <div class="col-lg-12 col-md-12 my-2 row">
                            <div class="col-lg-6 col-md-6 pl1">
                                <input type="text" class="form-control" id="inputEmail" name="firstname" placeholder="First Name" />
                            </div>
                            <div class="col-lg-6 col-md-6 pl2">
                                <input type="text" class="form-control" id="inputEmail" name="lastname" placeholder="Last Name" />
                            </div>
        
                        </div>

                        <div class="mb-2 d-flex">
                            <select class="form-select nationality" aria-label="Default select example">
                                <option selected>Egy +20</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                              <input type="number" class="form-control phone" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number" />

                          </div>
                        <div class="col-md-12 mb-2 p-r">
                            <input type="password" class="form-control" id="inputPassword" name="password" placeholder="Password" />
                        </div>
                        <div class="col-md-12 mb-2 p-r">
                            <input type="password" class="form-control" id="inputPassword" name="password" placeholder="Password" />
                        </div>

                        <div class="col-12 submit_btn mt-4">
                            <button type="submit" class="btn mb-4 mx-4 sing_in">Sing Up</button>
                            <p>Already Have an Account? <Link to="" className='link_singup'>Log In</Link></p>

                        </div>
                    </form>
                </div>
            </div>
        </div>



    </div>
  )
}
