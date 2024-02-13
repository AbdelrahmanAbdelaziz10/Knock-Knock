import React from 'react'
import { Link } from 'react-router-dom'

const OneServe = ({img,link}) => {
  return (
    <div className="col-lg-3 text-center">
    <div className="servies_image">
        <Link to={link} className="link">
            <img src={img} alt=""/>
            <p>Hire a cleaning worker</p>
        </Link>

    </div>
</div>
  )
}

export default OneServe