import React from 'react'

function RatingText({ feedback}) {
  return (
    feedback.map((item) => { 
      return <div key={item.id} className='rating_text'>
        <p className='single_rate'>{ item.text}</p>
      </div>
    })
  )
}

export default RatingText