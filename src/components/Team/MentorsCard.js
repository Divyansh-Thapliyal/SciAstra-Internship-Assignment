import React from 'react'

const MentorsCard = ({mentor}) => {
  return (
    <div className='flex-col p-2 m-2'>
      <div className='m-1'>
       <img src={mentor.photo} className='rounded-full'></img>
      </div>
      <div className='flex-col m-2 p-2 text-center'>
       <p>{mentor.name}</p>
       <p>{mentor.universityName}</p>
       <p>{mentor.locn}</p>
       {mentor.canMessaged && <button className='rounded-md bg-red-700 p-2 m-2 text-white' onClick={()=>{alert("Message functionality not implemented yet.")}}>Message him now</button>}
       
      </div>
    </div>
  )
}

export default MentorsCard
