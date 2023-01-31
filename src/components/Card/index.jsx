import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
const Card = ({title,id,photo}) => {
  return (

    <div className='card'>
      <Link to={`/products/${id}`} className="img">
        <img src={photo} alt="" />
      </Link>
      <Link to={`/products/${id}`} className="content">
        <h3 className="productTitle">
          {title}
        </h3>
      </Link>
    </div>
  )
}

export default Card