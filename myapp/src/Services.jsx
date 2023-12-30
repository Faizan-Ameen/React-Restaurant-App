import React from 'react'
import MenuData from './MenuData';
import Card from './Card';
import Footer from './Footer';
const Services = () => {
  return (
    <div className="services">
      <div className='heading'><h1><span>Our </span>Services</h1></div>
      <div className="service">
        {
          MenuData.map((val) => {
            return (
              <Card
                key={val.id}
                img={val.img}
                title={val.title}
                price={val.price}
                btn={val.btn}
              />
            )
          })
        }
      </div>
      <Footer />
    </div>
  )
}
export default Services;