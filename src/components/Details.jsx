import { useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {


  const [hid,setHid] = useState(true)
    const use1 = useLoaderData()
    const {id} = useParams()
    const use = use1.find(b => b.bookId === parseInt(id))

    console.log(use)

    function read(){
      setHid(false)
      let r1 = JSON.parse(localStorage.getItem("readItem")) || [];
      const dataEx = r1.find(r => r.bookId == use.bookId)
      if(dataEx){
        toast("Your All Ready Read This! Check Read List");
      }else{
        r1.push(use)
        let localValue = JSON.stringify(r1)
        localStorage.setItem("readItem",localValue)
        toast("Read Item Added !!");
      }

    }

    function wish(){
      let w1 = JSON.parse(localStorage.getItem("wishItem")) || [];
      const dataEx = w1.find(w => w.bookId == use.bookId);
      if(dataEx){
        toast( "You All-Ready Add In Wish!!");
      }else{
        w1.push(use)
        const localValue = JSON.stringify(w1)
        localStorage.setItem("wishItem",localValue)
        toast("Wish Item Added !!");
      }
    }


  return (
    <div className="h-[650px] w-full  flex space-x-3">
        <img className="w-[60%]" src={use.image} alt="" />
        <div>
            <h1 className="text-[40px] font-[700]">{use.bookName}</h1>
            <h1 className="text-[20px] font-[500]">By : {use.author}</h1>
            <hr className="mt-5 p-4"/>
            <h1 className="text-[20px] font-[500] text-black">Fiction </h1>
            <hr className="mt-5 p-4"/>

            <h1 className="font-[500] text-[18px]"><span className="font-[700]">Review</span> : {use.review}</h1>

            <hr className="mt-5 p-4"/>

            <h1 className="font-[500] text-[18px]"> Tags : #{use.tags[0]} #{use.tags[1]} #{use.tags[2]}</h1>

            <hr  className="p-4 mt-5 "/>

            <h1 className="mt-3">Number Of Pages : </h1>
            <h1  className="mt-3">Publisher : </h1>
            <h1  className="mt-3">Year of Publishing : </h1>
            <h1  className="mt-3">Rating : 5.00</h1>


            <button onClick={read} className="mt-7 btn border-2 border-solid border-gray-400 text-black">Read</button>
            <button onClick={wish} className={`${(!hid)? "disabled:opacity-75 btn ml-4  text-white " : "btn ml-4 bg-[#50B1C9] text-white "}  `}>Wishlist</button>

        </div>
        
        <ToastContainer />
    </div>
  )
}



export default Details
