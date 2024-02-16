import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website ia an online platform that facilitate the 
          buying and selling of products or services over the internet. It 
          serves as a virtual marketplace where businesses and individuals can 
          showcase their products,interact with customers, and conduct transaction 
          without the need for a physical presence E-commerce 
          website have gained immense popularity due to their convenience
          accessibility, and the global reach they offer </p>
          <p>
            E-Commerce website typically display products or services along with
            detailed description, images, prices, and any available variation
            (e.g.,sizes, colors). Each product usually has its on dedication page 
            with relevent information.
          </p>
      </div>
    </div>
  )
}
