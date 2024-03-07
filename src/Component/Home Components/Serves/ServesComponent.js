import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import { ContextLang, ToggleLoginContext } from "../../../App";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ServesComponent = ({ name_en, name_ar, image , link}) => {
  const { selectedLanguage, setSelectedLanguage } = useContext(ContextLang);
  const { saveToggleLogin } = useContext(ToggleLoginContext);
  const toggleLogin = JSON.parse(localStorage.getItem('toggleLogin'));

  const navigate=useNavigate()
const handelLogInPage=()=>{

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You Must Have account First To use this serves",        
      confirmButtonText: "Go to Login",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate("/login")
      } 
    });
  }

  return (
    <Col xs={4} lg={2} md={3} sm={4} className="servies_card col-lg-2 col-md-3">
    {toggleLogin === true ? 
    (
        <Link to={link} className="serves_cards d-flex">
        <div className="card_img ">
        <img src={image} alt="" />
      </div>
      <div className="card_head">
        {selectedLanguage === "en" ? <p>{name_en}</p> : <p>{name_ar}</p>}
      </div>
        </Link>
    )
    :
    (        <div className="serves_cards d-flex" onClick={handelLogInPage}>
        <div className="card_img ">
        <img src={image} alt="" />
      </div>
      <div className="card_head">
        {selectedLanguage === "en" ? <p>{name_en}</p> : <p>{name_ar}</p>}
      </div>
        </div>)}

    </Col>
  );
};

export default ServesComponent;
