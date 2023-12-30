import React from 'react'

const ReviewsCard = (props) => {
    return (
        <div className="reviews_card">
            <div className="reviews">
                <h1>;;</h1>
                <p>{props.cap}</p>
                <img src={props.img} alt="" />
                <h2>{props.name}</h2>
                <div className="ratings">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
        </div>
    )
}
export default ReviewsCard;