import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
   
      <section className='hero'>
         <> <form className='flex'>
    <div className='box'>
      <span>Applicant ID</span>
      <input type='text' placeholder='Roll No.' />
    </div>
    <div className='box'>
      <span>Course Name</span>
      <input type='text' placeholder='Course Name' />
    </div>
    <div className='box'>
      <span>Subject Name</span>
      <input type='text' placeholder='Subject Name' />
    </div>
    <div className='box'>
      <h4>Advance Filter</h4>
    </div>
    <button className='btn1'>
      <i className='fa fa-search'></i>
    </button>
  </form>
  </>
        <div className='container'>
          <Heading title='Online Examination Portal ' subtitle='Solution to all your queries here' />

          
        </div>
        
      </section>
     
   
  )
}

export default Hero
