import React from 'react'
import './Tours.css'
const Tour = ({id,image,info,price,name,  removeTour}) => {
  return (
    <div className='container'>
        <img src={image} alt={name} className='image'/>
        <p className='tour-info'>
       <h4 className='name'>{name}</h4>
       <h4 className='price'>${price}</h4>
          </p>
          <p className='info'>{info}</p>
          <button className='btn-delete' onClick={() => removeTour(id)}>Not interested</button>
    </div>
  )
}

export default Tour