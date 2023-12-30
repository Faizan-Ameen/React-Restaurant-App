import React from 'react'
import ReviewsCard from './ReviewsCard';
import CustomersData from './CustomerData';
import Footer from './Footer';
const Reviews = () => {
  return (
    <div className='reviews_data'>
      <div className="heading">
        <h1>Customer's <span>Reviews</span></h1>
      </div>
      <div className="data">
        {
          CustomersData.map((val) => {
           return(
            <ReviewsCard
              marker={val.marker}
              cap = {val.cap}
              img = {val.img}
              name = {val.name}
              rating={val.rating}
            />
           )
          })
        }
      </div>
      <Footer />
    </div>
  )
}
export default Reviews;