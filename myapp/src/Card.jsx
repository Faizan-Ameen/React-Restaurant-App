import React from 'react'
const Card = (props) => {
  return (
    <div className="card_menu">
      <div className="menu"  >
        {props.id}
        <img src={props.img} alt="" />
        <h4>{props.title}</h4>
        <h3>{props.price}</h3>
        <button>{props.btn}</button>
      </div>
    </div>
  )
}
export default Card;