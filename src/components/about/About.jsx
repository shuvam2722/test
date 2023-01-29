import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/pic1.JPG"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Our vision is to bring credible and genuine assessment to various aspects of education, training and employment.
S2722 strives to help institutions and companies from choosing the 'right' individual rather than the 'best' individual.</p>
            <p>S2722 is the first step towards recruitment process and helps aspiring candidates to move ahead and shape a better future for themselves.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./pic2.JPG' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
