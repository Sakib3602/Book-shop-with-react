import { FaAngleDown } from "react-icons/fa6";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SecondCard from "./SecondCard";
const List = () => {

  let localData1 = JSON.parse(localStorage.getItem("readItem"))
  let localData2 = JSON.parse(localStorage.getItem("wishItem"))

  console.log(localData1, " +++" , localData2)











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
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
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
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default List;
