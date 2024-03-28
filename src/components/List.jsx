import { FaAngleDown } from "react-icons/fa6";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
import { useEffect, useState } from "react";



const List = () => {

  const [localData1,setLocalData1] = useState([])
  const [localData2,setLocalData2] = useState([])

  useEffect(()=>{
    let l1 = localStorage.getItem("readItem") 
    let l2 = localStorage.getItem("wishItem") 
    setLocalData1(l1?JSON.parse(l1) : [])
    setLocalData2(l2?JSON.parse(l2) : [])
  },[])

  console.log(localData1, " +++" , localData2)


  // sorting........................

  function rating(){
  const newData = [...localData1]
  newData.sort((a,b)=> b.rating - a.rating)
  setLocalData1([...newData])

  const newData1 = [...localData2]
  newData1.sort((a,b)=> b.rating - a.rating)
  setLocalData2([...newData1])
  }

  function pages(){
    const newData = [...localData1]
    newData.sort((a,b)=> b.totalPages - a.totalPages)
    setLocalData1([...newData])

    const newData1 = [...localData2]
    newData1.sort((a,b)=> b.totalPages - a.totalPages)
    setLocalData2([...newData1])
  }
  function year(){
    const newData = [...localData1]
    newData.sort((a,b)=> b.yearOfPublishing - a.yearOfPublishing)
    setLocalData1([...newData])

    const newData1 = [...localData2]
    newData1.sort((a,b)=> b.yearOfPublishing - a.yearOfPublishing)
    setLocalData2([...newData1])
  }




  // start
  return (
    <div>
      <div className="h-[80px] text-center bg-gray-300 rounded-3xl">
        <h1 className="text-[55px] text-black font-[700]">BOOK</h1>
      </div>

      <div className="dropdown ">
        <div
          tabIndex={0}
          role="button"
          className="btn bg-[#23BE0A] mt-7 text-white font-[600]"
        >
          Sort By <FaAngleDown></FaAngleDown>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <button onClick={rating} className="mt-4 text-[18px]  font-[600] cursor-pointer p-3">
           Rating
          </button>
          <button onClick={pages} className="mt-4 text-[18px] font-[600] cursor-pointer p-3" >
           Number Of Page
          </button>
          <button onClick={year} className="mt-4 text-[18px] font-[600] cursor-pointer p-3" >
           Published Year
          </button>
          
        </ul>
      </div>

      {/* tabs */}
      <div className="mt-8">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wish List Books</Tab>
          </TabList>

          <TabPanel>
            {
              localData1.map((e,i)=> <SecondCard key={i} e={e}></SecondCard>)
            }
            
          </TabPanel>
          <TabPanel>
            {
              localData2.map((e,i)=> <ThirdCard key={i} e={e}></ThirdCard>)
            }
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default List;
