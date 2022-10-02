import React from 'react'

function Register() {
  return (
    <div className="styled-container-register w-screen h-screen bg-red-600 flex items-center justify-center "
    
    
    >

    <div className="wrapper w-[40%] p-[20px] bg-white mx-auto shadow-lg text-center">
      <h1 className="title text-[24px] font-extralight tracking-wide">
        CREATE AN ACCOUNT
      </h1>
      <form action="" className="form flex flex-col">
        <input type="text" className="name border border-red-600 p-[15px] outline-none my-2" placeholder="Name"/>
        <input type="text" className="lastname border border-red-600 p-[15px] outline-none my-2" placeholder="Last Name"/>
        <input type="email" className="email border border-red-600 p-[15px] outline-none my-2" placeholder="Email"/>
        <input type="text" className="username border border-red-600 p-[15px] outline-none my-2" placeholder="Username"/>
        <input type="password" className="password border border-red-600 p-[15px] outline-none my-2" placeholder="Password"/>
        <input type="password" className="passwordConfirm border border-red-600 p-[15px] outline-none my-2"  placeholder="Confirm Password"/>
        {/* <input type="checkbox" name="agreement" id="" /> */}

        <span htmlFor="agreement" name="agreement" className="agreement text-[12px] my-[20px]">By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></span>
        
        <button className="button py-[15px] px-[20px] bg-red-600 text-white font-bold cursor-pointer hover:bg-red-700">CREATE AN ACCOUNT</button>
      </form>
    </div>
    
    
    </div>
  )
}

export default Register