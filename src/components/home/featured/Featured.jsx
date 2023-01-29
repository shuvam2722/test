import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Our Premium Courses' subtitle='Find All Type of Course.' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
