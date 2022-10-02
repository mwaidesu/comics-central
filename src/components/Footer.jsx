import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

function Footer() {
  return (
    <div className="styled-container flex bg-black text-white">
        <div className="left flex-[1] flex flex-col p-[20px]">
          <h1 className="logo text-xl font-bold ">
            <span className="text-red-600">COMICS</span>CENTRAL
          </h1>
          <p className="description my-[20px] mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum adipisci, possimus natus laudantium odit iusto itaque pariatur corporis praesentium!</p>

          <div className="social-container flex ">
            <div className="facebook w-[40px] h-[40px] rounded-full text-white flex items-center justify-around  bg-blue-600 mr-[20px]">
              <FacebookIcon/>
            </div>
            <div className="instagram w-[40px] h-[40px] rounded-full text-white flex items-center justify-around 
            bg-gradient-to-r from-purple-500 to-pink-500 mr-[20px]">
              <InstagramIcon/>
            </div>
            <div className="pinterest w-[40px] h-[40px] rounded-full text-white flex items-center justify-around bg-red-600 mr-[20px]">
              <PinterestIcon/>
            </div>

            <div className="twitter w-[40px] h-[40px] rounded-full text-white flex items-center justify-around bg-blue-500 mr-[20px]">
              <TwitterIcon/>
            </div>

          </div>
        </div>
        <div className="center flex-[1] p-[20px]">
          <h3 className="title mb-[20px]">
            Useful Links
          </h3>

          <ul className="list m-0 p-0 list-none flex flex-wrap">
            <li className="listItem w-1/2 mb-[10px]">Home</li>
            <li className="listItem w-1/2 mb-[10px]">Cart</li>
            <li className="listItem w-1/2 mb-[10px]">Marvel</li>
            <li className="listItem w-1/2 mb-[10px]">DC Comics</li>
            <li className="listItem w-1/2 mb-[10px]">Manga</li>
            <li className="listItem w-1/2 mb-[10px]">Manhwa</li>
            <li className="listItem w-1/2 mb-[10px]">Manhwa</li>
            <li className="listItem w-1/2 mb-[10px]">Wishlist</li>
            <li className="listItem w-1/2 mb-[10px]">Terms</li>
            <li className="listItem w-1/2 mb-[10px]">Comics</li>

          </ul>

        </div>
        <div className="right flex-[1] p-[20px]">
          <h3 className="title mb-[20px]">Contact</h3>
          <p className="contact-item flex items-center mb-[20px]">
            <LocationOnIcon className="mr-[20px]"/>
            69 Riverside Drive, South C 420
          </p>
          <p className="contact-item flex items-center mb-[20px]">
            <PhoneIcon className="mr-[20px]"/>
            +254 123 456 789
          </p>
          <p className="contact-item flex items-center mb-[20px]">
            <MailIcon className="mr-[20px]"/>
            comics@central.com
          </p>

          <img src="https://i.postimg.cc/dVncTq2Y/u-CNw-rbs1f-Ot-Wt-PYm4-D-h-transformed.png" alt="payment" className="payment w-1/2" />
        </div>
    </div>
  )
}

export default Footer