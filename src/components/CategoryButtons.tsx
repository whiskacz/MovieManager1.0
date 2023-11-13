import React from 'react'

const CategoryButtons = () => {

    const categoryButtons = [
        'private',
        'now playing',
        'popular',
        'top rated',
        'upcoming'
    ]

  return (
    <div className='mainCategoryButtons'>
    {categoryButtons.map((element,index) => {
        return (
        <button key={index}>{element}</button>
)})}
    </div>
  )
}

export default CategoryButtons