import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DownloadIcon from '@mui/icons-material/Download';

function SingleComic() {
  return (
    <div className="styled-container">
      <Navbar />
      <Announcement />
      <div className="styled-wrapper p-[50px] flex">
        <div className="img-container flex-[1] ">
          <img
            src="https://www.guidingtech.com/wp-content/uploads/Justice-league-movie-wallpaper-3_4d470f76dc99e18ad75087b1b8410ea9.jpg"
            alt="product"
            className="w-full h-[90vh] object-cover"
          />
        </div>
        <div className="info-container flex-[1] py-0 px-[50px]">
          <h1 className="title text-[20px] font-bold">Justice League</h1>
          <p className="description my-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            maiores ea sit officia provident ipsa nesciunt voluptas expedita ad
            possimus?
          </p>
          <div>
            <h1 className="title text-[20px] font-bold mt-2">Read Chapters Online</h1>
            <hr />

            <div>
              <p className="my-[20px] flex items-center justify-between hover:font-extrabold">Chapter 1 <DownloadIcon className="hover:bg-black hover:text-white rounded-full"/></p>
              <hr />
            </div>

            <div>
              <p className="my-[20px] flex items-center justify-between hover:font-extrabold">Chapter 2<DownloadIcon className="hover:bg-black hover:text-white rounded-full"/></p>
              <hr />
            </div>
            <div>
              <p className="my-[20px] flex items-center justify-between hover:font-extrabold">Chapter 3 <DownloadIcon className="hover:bg-black hover:text-white rounded-full"/></p>
              <hr />
            </div>

          </div>

          <h1 className="font-bold text-[20px] mt-20">Buy Volume 1 Hardcopies Now!!</h1>
          <hr />


          <span className="price font-thin text-[40px]">Ksh. 750</span>
          <div className="add-container flex items-center justify-between mt-4">
            <div className="amount-container flex items-center font-bold">
              <button className="remove w-[30px] h-[30px] border border-red-500 bg-red-500 text-white flex items-center justify-center mx-[5px] hover:shadow-md hover:bg-red-600">
                <RemoveIcon/>
              </button>
              <span className="amount w-[30px] h-[30px] border border-red-500 flex items-center justify-center mx-[5px]">1</span>
              <button className="add w-[30px] h-[30px] border border-red-500 bg-red-500 text-white flex items-center justify-center mx-[5px] hover:shadow-md hover:bg-red-600">
                <AddIcon/>
              </button>
            </div>
            <button className="p-[15px] border  hover:text-white cursor-pointer hover:shadow-md font-medium hover:bg-black">ADD TO CART &nbsp;
            <AddShoppingCartIcon/>
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default SingleComic;
