import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const OneServe = ({img,link}) => {
  return (
    <Col xs={6} lg={3} md={3} sm={6} className="text-center">
    <div className="servies_image">
        <Link to={link} className="link">
            <img src={img} alt=""/>
            <p>Hire a cleaning worker</p>
        </Link>

    </div>
</Col>
  )
}

export default OneServe