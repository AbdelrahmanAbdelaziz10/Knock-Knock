import React from 'react'
import './MainProductDetails.css'
import { FaHome } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
const ProductHead = ({img,page1,page2}) => {
  return (
<div className='row product_head'>
<div className='head_title'>
<Link to="/" className=''><FaHome className='home_icon'/></Link> <Link to="" className='page1'> <MdKeyboardArrowRight className='home_icon'/>  {page1}</Link> <span> <MdKeyboardArrowRight className='home_icon'/>  {page2}</span>


</div>
<div className='head_image'>
    <img src={img} alt=''/>
</div>
</div>
    
  )
}

export default ProductHead