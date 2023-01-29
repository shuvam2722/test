import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/pic22.JPG"

const Infrastructure = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Our' title='Infrastructure - The areas' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Infrastructure
