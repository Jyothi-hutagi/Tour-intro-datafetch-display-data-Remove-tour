import React from 'react'
import Tour from './Tour'
import './Tours.css'
const Tours = ({tours,removeTour}) => {
  return (
      <section>
          <div className='title'>
           <h2 className='heading'>Our Tours</h2>
          </div>
          <div>
              {tours.map((tours)=>{
              return <Tour key={tours.id} {...tours} removeTour={removeTour}></Tour>
              }
              )}
          </div>
      </section>
  )
}

export default Tours