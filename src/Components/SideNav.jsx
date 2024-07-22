import React from 'react'

const SideNav = () => {
  return (
    <>
     <div
      className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
    >
      
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-blue-600 text-white">
        <i className="bi bi-house-door-fill"></i>
        <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
      </div> 
      <div
        className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white"
      >
        <i className="bi bi-box-arrow-in-right"></i>
      </div>
    </div>

    </>
  )
}

export default SideNav