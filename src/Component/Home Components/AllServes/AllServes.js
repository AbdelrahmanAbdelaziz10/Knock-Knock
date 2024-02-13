import React from 'react'
import './AllServes.css'
import Rectangle1 from "../../../images/Rectangle 195.svg"
import Rectangle2 from "../../../images/Rectangle2.svg"
import private4 from "../../../images/private4.svg"
import general1 from "../../../images/general1.svg"
import general2 from "../../../images/general2.svg"
import product1 from "../../../images/product1.svg"
import product2 from "../../../images/product2.svg"
import product3 from "../../../images/product3.svg"
import product4 from "../../../images/product4.svg"
import private3 from "../../../images/private3.svg";
import { Link } from 'react-router-dom'
import { ServesRow } from './ServesRow'
const AllServes = () => {
  return (
    <section className="allservice">
        <div className="container">
        <ServesRow title={"Private Services"} link={"/peivateserves"} />
        <ServesRow title={"General Services"} link={"/peivateserves"}/>
        <ServesRow title={"Products Section"} link={"/allproduct"}/>

            {/* <div className="general_servies mb-5">
                <div className="row my-3 head">
                    <div className="col-lg-10">
                        <h4>General Services</h4>
                    </div>
                    <div className="col-lg-2">
                    <Link className="link" to=""> <span>See More</span></Link>
                    </div>

                </div>
                <div className="row servies">
                    <div className="col-lg-3 text-center">
                        <div className="servies_image">
                            <Link to="" className="link">
                                <img src={general1} alt=""/>
                                <p>
                                    Insecticide spraying service </p>
                            </Link>

                        </div>
                    </div>
                    <div className="col-lg-3 text-center">
                        <div className="servies_image">
                            <Link to="" className="link">
                                <img src={general2} alt="" />
                                <p>
                                    Home sterilization service
                                </p>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="privete_servies mb-5">
                <div className="row my-3 head">
                    <div className="col-lg-10">
                        <h4>Products Section</h4>
                    </div>
                    <div className="col-lg-2">
                    <Link className="link" to=""> <span>See More</span></Link>
                    </div>

                </div>
                <div className="row servies justify-content-center">
                    <div className="col-lg-3 ">
                        <div className="card">
                            <div className="card_image_product">
                                <img src={product1} alt="" />
                            </div>
                            <div className="card_text_product">
                                <p>
                                    Sunny oil
                                </p>
                                <h6>AED 40 <span>-30%</span></h6>
                                <button className="btn btn-deteils">Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className="card">
                            <div className="card_image_product">
                                <img src={product2} alt="" />
                                </div>
                                <div className="card_text_product">
                                <p>
                                    Flour
                                </p>
                                <h6>AED 10 <span>-30%</span></h6>
                                <button className="btn btn-deteils">Details</button>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className="card">
                            <div className="card_image_product">
                                <img src={product3} alt="" />
                                </div>
                                <div className="card_text_product">
                                <p>
                                    Dasani
                                </p>
                                <h6>AED 5 <span>-30%</span></h6>
                                <button className="btn btn-deteils">Details</button>
                                </div>
                            </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className="card">
                            <div className="card_image_product">
                                <img src={product4} alt=""/>
                                </div>
                                <div className="card_text_product">
                                <p>
                                    Suger
                                </p>
                                <h6>AED 5 <span>-30%</span></h6>
                                <button className="btn btn-deteils">Details</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </section>  )
}

export default AllServes