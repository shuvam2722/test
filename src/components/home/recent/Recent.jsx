import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Our Infrastructure' subtitle='Singing,Dancing,Fooball,Cricket,Badminton and all types of extra curricular activites are available here' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
