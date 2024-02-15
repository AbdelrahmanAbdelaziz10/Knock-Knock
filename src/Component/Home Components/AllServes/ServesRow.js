import React from 'react'
import { Link } from 'react-router-dom'
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
import OneServe from './OneServe'
import OneProduct from './OneProduct'
import { Col } from 'react-bootstrap'
export const ServesRow = ({title,link}) => {
  return (
    <div className="privete_servies mb-3">
    <div className="row my-3 head">
        <Col xs={9} lg={10} md={9} sm={9} className="">
            <h4>
                {title}
            </h4>
        </Col>
        <Col xs={3} lg={2} md={3} sm={3} className="">
            <Link to={link} className="link" > <span>See More</span></Link>
        </Col>

    </div>
    {
        title==="Products Section"? (
            <div className="row servies">
            <Col xs={6} lg={3} md={6} sm={6} className=" mb-5">
            <OneProduct img={product1} name={"Sunny oil"} prise={"40"} discount={"-30%"} link={"/productdeteils"} />
            </Col>
            <Col xs={6} lg={3} md={6} sm={6}  className=" mb-5">
            <OneProduct img={product2} name={"Flour"} prise={"10"} discount={"-30%"} link={"/productdeteils"} />
            </Col>
            <Col xs={6} lg={3} md={6} sm={6}  className=" mb-5">
            <OneProduct img={product3} name={"Dasani"} prise={"5"} discount={"-30%"} link={"/productdeteils"} />
            </Col>
            <Col xs={6} lg={3} md={6} sm={6}  className=" mb-5">
            <OneProduct img={product4} name={"suger"} prise={"5"} discount={"-30%"} link={"/productdeteils"} />
            </Col>
            </div>
        ):(       
            <div className="row servies">
    <OneServe img={Rectangle1} link={"/serves_details"} />
    <OneServe img={Rectangle2} link={"/serves_details"} />
    <OneServe img={private3} link={"/serves_details"} />
    <OneServe img={private4} link={"/serves_details"} />
    </div>)
    }

{/* 
        <div className="col-lg-3 text-center">
            <div className="servies_image">
                <Link to="" className="link">
                    <img src={Rectangle1} alt=""/>
                    <p>Hire a cleaning worker</p>
                </Link>

            </div>
        </div> 
        <div className="col-lg-3 text-center">
            <div className="servies_image">
                <Link to="" className="link">
                    <img src={Rectangle2}alt=""/>
                    <p>Hire technical labor</p>
                </Link>
            </div>
        </div>
        <div className="col-lg-3 text-center">
            <div className="servies_image">
                <Link to="" className="link">
                    <img src={private3} alt=""/>
                    <p>
                        Material transportation <br/> vehicle rental
                    </p>
                </Link>
            </div>
        </div>
        <div className="col-lg-3 text-center">
            <div className="servies_image">
                <Link to="" className="link">
                    <img src={private4} alt=""/>
                    <p>
                        Air conditioning <br/> maintenance contracts
                    </p>
                </Link>

            </div>
        </div>
        */}

</div> 
 )
}
