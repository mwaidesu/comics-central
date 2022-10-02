import React from 'react'
import SendIcon from '@mui/icons-material/Send';

const Newsletter = () => {
  return (
    <div className="styled-container h-[60vh] bg-red-600 text-white flex  items-center justify-center flex-col">
        <h1 className="title text-[70px] font-semibold mb-[20px]">Newsletter</h1>
        <div className="description text-[24px] font-light mb-[20px]">Get timely updates about your favorite comics!</div>
        <div className="inputContainer w-1/2 h-[40px] bg-white flex items-center justify-between pl-4">
            <input type="text" placeholder="Your Email..."  className="outline-none flex-[8] pl-[20]"/>
            <button className="flex-[1] bg-black text-white h-[40px] px-3">
                <SendIcon/>
            </button>
        </div>
      
    </div>
  )
}

export default Newsletter
