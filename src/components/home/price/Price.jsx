import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='At our website , you can contact to any of our admins or directly purchase the plans to get the advantages of software as a service.' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
