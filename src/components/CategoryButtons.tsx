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
    {categoryButtons.map((element) => {
        return (
        <button>{element}</button>
)})}
    </div>
  )
}

export default CategoryButtons