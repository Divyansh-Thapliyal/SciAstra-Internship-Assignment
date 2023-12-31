

import React from 'react'

const UniversityCard = (props) => {
  return (
    <div className='rounded-lg p-2 border-2 w-64 h-auto pt-14 pb-14 flex justify-center font-bold m-3 text-black bg-gray-100'>
      {props.title}
    </div>
  )
}

export default UniversityCard
