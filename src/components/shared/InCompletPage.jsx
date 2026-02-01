import React from 'react'

function InCompletPage({heading,subheading}) {
  return (
     <div className='mx-auto text-center md:w-4/12 my-8'>
           
        <h3 className="text-3xl uppercase font-bold l leading-tight py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full mb-6">{heading}</h3>
             
         <p className=" text-orange-600 font-bold">--- {subheading} ---</p>
       
    </div>
  )
}

export default InCompletPage