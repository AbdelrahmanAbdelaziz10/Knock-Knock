import React from 'react'
import OneProduct from '../../Home Components/AllServes/OneProduct'
import product1 from "../../../images/product1.svg"
import product2 from "../../../images/product2.svg"
import product3 from "../../../images/product3.svg"
import product4 from "../../../images/product4.svg"
import private3 from "../../../images/private3.svg";
import { Container } from 'react-bootstrap'

const MainProduct = () => {
  return (
    <div className='main_product'>
    <Container>
    <div className="row servies">
            <div className="col-lg-3 mb-4">
            <OneProduct img={product1} name={"Sunny oil"} prise={"40"} discount={"-30%"} link={""} />
            </div>
            <div className="col-lg-3 mb-4">
            <OneProduct img={product2} name={"Flour"} prise={"10"} discount={"-30%"} link={""} />
            </div>
            <div className="col-lg-3 mb-4">
            <OneProduct img={product3} name={"Dasani"} prise={"5"} discount={"-30%"} link={""} />
            </div>
            <div className="col-lg-3 mb-4">
            <OneProduct img={product4} name={"suger"} prise={"5"} discount={"-30%"} link={""} />
            </div>
            <div className="col-lg-3 mb-4">
            <OneProduct img={product1} name={"Sunny oil"} prise={"40"} discount={"-30%"} link={""} />
            </div>
            <div className="col-lg-3 mb-4">
            <OneProduct img={product2} name={"Flour"} prise={"10"} discount={"-30%"} link={""} />
            </div>
            <div className="col-lg-3 mb-4">
            <OneProduct img={product3} name={"Dasani"} prise={"5"} discount={"-30%"} link={""} />
            </div>
            <div className="col-lg-3 mb-4">
            <OneProduct img={product4} name={"suger"} prise={"5"} discount={"-30%"} link={""} />
            </div>
            <div className="col-lg-3 mb-4">
            <OneProduct img={product1} name={"Sunny oil"} prise={"40"} discount={"-30%"} link={""} />
            </div>
            <div className="col-lg-3 mb-4">
            <OneProduct img={product2} name={"Flour"} prise={"10"} discount={"-30%"} link={""} />
            </div>
            <div className="col-lg-3 mb-4">
            <OneProduct img={product3} name={"Dasani"} prise={"5"} discount={"-30%"} link={""} />
            </div>
            <div className="col-lg-3 mb-4">
            <OneProduct img={product4} name={"suger"} prise={"5"} discount={"-30%"} link={""} />
            </div>
            
            </div>
    </Container>

    </div>

  )
}

export default MainProduct