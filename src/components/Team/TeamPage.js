import React from 'react'
import UniversityCard from './UniversityCard';
import MentorsCard from './MentorsCard';
import img1 from '../../a.jpeg';
import img2 from '../../b.jpeg';

const UniversityList=[
    "Cambridge University",
    "Harvard University",
    "University of California ",
    "Eth Zurich",
    "Max Planck",
    "University Of Edinberg",
    "John Hopkins",
    "University Of Illinois",
    "Humbolt University Berlin",
    "IIT Madras",
];

const MentorList=[
     {
         name:"Shubham",
         photo:img1,
         universityName:"Cambridge University,UK"
     },
     {
        name:"Shubham",
        photo:img2,
        universityName:"Cambridge University,UK"
    },{
        name:"Shubham",
        photo:img1,
        universityName:"Cambridge University,UK"
    },{
        name:"Shubham",
        photo:img2,
        universityName:"Cambridge University,UK"
    },{
        name:"Shubham",
        photo:img2,
        universityName:"Cambridge University,UK"
    },{
        name:"Shubham",
        photo:img1,
        universityName:"Cambridge University,UK"
    },{
        name:"Shubham",
        photo:img2,
        universityName:"Cambridge University,UK"
    },
];

const MentorAndAdvisorList=[
    {
        name:"Dr Omkar",
        photo:img1,
        desc:"Principal Project Scientist",
        locn:'IIT Madras',
        canMessaged:false
    },
    {
        name:"Ankit Tripathi",
        photo:img1,
        desc:"",
        locn:'',
        canMessaged:true
    },{
        name:"Vivek Driwedi",
        photo:img1,
        desc:"",
        locn:'',
        canMessaged:"true"
    },
];
const TeamPage = () => {
  return (<>

    <div className='p-2 m-10 text-center text-2xl font-bold'>
      <span>Learn from Scientists, reserach scholars from the top institutes in the world.</span>
    </div>

    <div className='flex flex-wrap justify-center '>
       {UniversityList.map((uni)=>{return <UniversityCard title={uni}></UniversityCard>})}
    </div>

    <div className='p-2 m-10 text-center text-3xl font-bold'>
        <span>Meet your mentors</span>
    </div>

    <div className='flex flex-wrap justify-center '>
       {MentorList.map((mentor)=>{return <MentorsCard mentor={mentor}></MentorsCard>})}
    </div>

     
    <div >
        <div className='p-2 m-10 text-3xl font-bold'>
        <span>Mentors and Advisors</span>
        </div>
        <div className='flex flex-wrap justify-around'>
       {MentorAndAdvisorList.map((mentor)=>{return <MentorsCard mentor={mentor}></MentorsCard>})}
       </div>
    </div>
    

    </>
  )
}

export default TeamPage
