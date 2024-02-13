import React ,{ useState } from "react";
import { Col, Row } from "react-bootstrap";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css'
import CustomInput from "./CustomInput";
import './BodyDeteils.css'
import { IoAddOutline } from "react-icons/io5";
import { IoRemoveOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const BodyDetails = () => {
    const [date, setDate] = useState(new Date());
    const [selectDate, setSelectDate] = useState(null);

    const onChange = date=>{
        setDate(date);
    }

  return (
    <div className="body_details my-4">
      <Row>
        <div className="description">
          <h4>SUN OIL</h4>
          <p>
            Extracted from the finest, handpicked olives, our Extra Virgin Olive
            Oil is cold-pressed to ensure the highest quality and purity. Its
            rich golden hue and robust, fruity aroma are a prelude to the depth
            of flavor that awaits within.
          </p>
        </div>
        <div className="details">
          <h4>Details</h4>
          <ul>
            <li>Numbers: 40 bottle Roses</li>
            <li>Presented as a hand bouquet</li>
            <li>Available colors: Pink, red, white or Yellow</li>
            <li>Height 50, width 25 cm</li>
          </ul>
        </div>
        <div className="stock mb-2">
            <h4>Availability: <span>In Stock</span></h4>
            <h4>SKU: <span>Knock Knock56235</span></h4>
        </div>
        <div className="price_serves stock mb-2">
            <h4>The Price Of Serves: <span>100$ / hr</span></h4>
        </div>
        <div className="time_date">
            <h5 className="mb-3">
            Select date and time of delivery
            </h5>
            <div className="delivery_date row mb-4">
            <div className="col-lg-4">
                <h5>Delivery <span>Date</span> </h5>
                <label><Datepicker selected={selectDate} onChange={date=>setSelectDate(date)}  customInput={<CustomInput />}/></label> 
            </div>
            <div className="col-lg-4">
            <h5>Delivery <span>time</span></h5>
            <div className="time_input">
                <input type="time" className="input_time" />
            </div>
                
            </div>

            </div>
            <div className="col-lg-12 row justify-content-center add_btn ">
            <div className="col-lg-3">
                    <button className="btn decincrease">
                        <IoRemoveOutline className="remove"/>
                    </button>
                    <span>
                        1
                    </span>
                    <button className="btn increase">
                        <IoAddOutline className="add"/>
                    </button>
                    </div>
                    <div className="col-lg-5 mt-2">
                    <button className=" total_price mt-2">
                    Total Price: 200 AED
                    </button>
                    </div>
                    <div className="col-lg-4 mt-3 ">
                    <Link to="" className="btn btn-Add">Add To Card</Link>
                    </div>
                </div>



            </div>

      </Row>
    </div>
  );
};

export default BodyDetails;
