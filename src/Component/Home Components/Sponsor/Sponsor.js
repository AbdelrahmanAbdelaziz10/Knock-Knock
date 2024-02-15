import React from 'react'
import './Sponsor.css'
import logo from '../../../images/K.png'
import { Col } from 'react-bootstrap'
const Sponsor = () => {
  return (
    <>
    <section class="Justlife_protects py-5">
        <div class="container row justify-content-center">
                <Col xs={9} lg={9} md={9} sm={9}  class="sponsor_text my-4">
                    <h2>يعمل جست لايف على حمايتك وحماية منزلك</h2>
                    <p>إن منحك راحة البال هو أولويتنا القصوى. ولذلك، في حال حدوث أي ضرر غير متوقع خلال تقديم الخدمة؛
                        سنقوم بتعويضك بما يصل إلى 1000 AED*.</p>
                </Col>

                <Col xs={2} lg={3} md={2} sm={2} class="sponser">
                    <img src={logo} alt=""/>
                </Col>


        </div>
    </section>

    </>
  )
}

export default Sponsor