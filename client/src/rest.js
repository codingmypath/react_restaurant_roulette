import React from "react"

export default function rest() {
    return (
        <div>
        <h2 class="restaurantHeader">Restaurant</h2>
        <h2 class="restaurantName">restaurant.name</h2>
        <h2 class="rating">Rating</h2>
        <section className="starRating" />
        if (restaurant.rating === 5) { 
            <p>5</p>
            // <div><i class="fa-solid fa-star"></i></div>
            // <div><i class="fa-solid fa-star"></i></div>
            // <div><i class="fa-solid fa-star"></i></div>
            // <div><i class="fa-solid fa-star"></i></div>
            // <div><i class="fa-solid fa-star"></i></div>
         } else if (restaurant.rating === 4.5) {
            <p>4.5</p>
            // <div><i class="fa-solid fa-star"></i></div>
            // <div><i class="fa-solid fa-star"></i></div>
            // <div><i class="fa-solid fa-star"></i></div>
            // <div><i class="fa-solid fa-star"></i></div>
            // <div><i class="fa-solid fa-star-half-stroke"></i></div>
         } else if (restaurant.rating === 4) {
            <p>4</p>
         }
        </div >
    )
}
