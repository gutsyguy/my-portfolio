import React from 'react'

const HomePage = () => {
  return (
    <div className='flex justify-center pt-[4rem] pb-[2rem] bg-black bg-no-repeat bg-cover text-white' style={{backgroundImage: "url('/Timeline.svg')"}}>
        <div>
            <div  className='flex justify-center pt-[4rem] pb-[2rem] bg-black bg-no-repeat bg-cover text-white' style={{backgroundImage: "url('/Timeline.svg')"}}>
                <div className=' opacity-75 py-[20rem] '>
                    <h1 data-aos="fade-up" className='text-[5rem]'>Hi I&apos;m
                    <b className='text-[5rem] inline-block text-[#D8A206] ml-4'>Yalamber</b></h1>
                    <h2 data-aos="fade-up" className='text-[3rem] text-center'>Software Engineer</h2>
                </div>
            </div>
            <h1>Projects</h1>

        </div>
    </div>
  )
}

export default HomePage