import React from 'react'

const CategoryItem = ({item}) => {
  return (
    <div className="styled-container flex-[1] m-[3px] h-[70vh] relative">
      <img src={item.img} alt="" className="w-full h-full object-cover"/>
      <div className="info-container absolute w-full h-full top-0 left-0  flex justify-center items-center flex-col">
        <h1 className="font-bold text-white mb-[20px] text-3xl">{item.title}</h1>
        <button className="p-[20px] bg-white text-gray-500 cursor-pointer font-bold hover:bg-black hover:text-white">SHOP NOW!</button>
      </div>
    </div>
  )
}

export default CategoryItem
