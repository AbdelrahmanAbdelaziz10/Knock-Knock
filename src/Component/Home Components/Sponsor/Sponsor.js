import React from 'react'
import './Sponsor.css'
import logo from '../../../images/K.png'
const Sponsor = () => {
  return (
    <>
    <section class="Justlife_protects py-5">
        <div class="container row justify-content-center">
            <div class="col-lg-8">
                <div class="sponsor_text my-4">
                    <h2>يعمل جست لايف على حمايتك وحماية منزلك</h2>
                    <p>إن منحك راحة البال هو أولويتنا القصوى. ولذلك، في حال حدوث أي ضرر غير متوقع خلال تقديم الخدمة؛
                        سنقوم بتعويضك بما يصل إلى 1000 AED*.</p>
                </div>

            </div>
            <div class="col-lg-3">
                <div class="sponser">
                    <img src={logo} alt=""/>
                </div>
            </div>


        </div>
    </section>

    </>
  )
}

export default Sponsor