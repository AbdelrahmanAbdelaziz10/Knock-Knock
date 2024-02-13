import React from 'react'
import logo from '../../images/Logo.png'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (

    <div className="login">

        <div className="container">
            <div className="row login_main mt-4">
                <div className="col-lg-5 col-md-9 ">
                    <form className="row form g-3 mb-5" method="POST" action="{{route('register.store')}}">
                        <i className="fa-solid fa-x"></i>
                        <div className="form_head text-center mb-2">
                            <img className="" src={logo} alt=""/>
                            <h4> Log In</h4>
                        </div>

                        <div className="col-lg-12 col-md-12 my-3">
                            <input type="number" className="form-control" id="inputEmail" name="Phone" placeholder="Phone Number" />
                        </div>

                        <div className="col-md-12 p-r">
                            <input type="password" className="form-control" id="inputPassword" name="password" placeholder="Password"/>
                             {/* <i className="fa fa-eye-slash" onclick="myFunction()"  aria-hidden="true"></i>  */}
                        </div>

                        <div className="row check justify-content-between  mt-4 ">
                            <div className="mb-3 col-6 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                              </div>
                            <div className="col-6 forget ps-5">
                                <Link to="" className="forget_password ms-2">
                                    Forget Password
                                </Link>
                            </div>
                        </div>

                        <div className="col-12 submit_btn mt-4">
                            <button type="submit" className="btn mb-4 mx-4 sing_in">Log In</button>
                            <p>Don't Have An account? <Link to="" className='link_singup'>Sing Up</Link></p>

                        </div>
                    </form>
                </div>

            </div>
        </div>



    </div>
  )
}

export default Login