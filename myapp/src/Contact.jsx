import React from 'react'
import Footer from './Footer';
 const Contact = () => {
  return (
   <form action="">
    <div className="heading">
      <h1><span>Contact</span> Us</h1>
    </div>
    <div className="contact">
      <input type="text" name="" id="" className='' placeholder='User Name'/>
      <input type="tel" name="" id="" className='' placeholder='Mobile Number' /> 
      <input type="password" name="" id="" className='' placeholder='Password' /> 
      <button>Submit</button>
    </div>
    <Footer />
   </form>
  )
}
export default Contact;