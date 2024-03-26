
import PropTypes from 'prop-types'
import { IoLocationOutline } from "react-icons/io5";
import { IoMdPeople } from "react-icons/io";
import { SiPowerpages } from "react-icons/si";
import { Link } from 'react-router-dom';
const ThirdCard = ({e}) => {
    const {
        image,
        bookId,
        bookName,
        category,
        publisher,
        rating,
        tags,
        totalPages,
        yearOfPublishing,
        author,
      } = e;
      return (
        
        <div>
          <div>
            <div className="w-full border-2 border-solid border-purple-500 mt-6 rounded-3xl p-8 sm:flex sm:space-x-6  text-gray-100">
              <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                <img
                  src={image}
                  alt=""
                  className="  w-[500px] lg:h-[185px] rounded "
                />
              </div>
              <div className="flex flex-col space-y-2 ">
                <div className="space-y-5">
                  <h2 className="text-4xl font-semibold text-black">{bookName}</h2>
                  <span className="text-[18px] text-gray-700 mt-7">
                    By : {author}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="flex items-center space-x-2">
                    <span className="text-black font-[700]">Tags : </span>
                    <span className="text-[#23BE0A]  font-[600]">#{tags[0]} </span>
                    <span className="text-[#23BE0A] font-[600]">#{tags[1]} </span>
                    <span className="text-[#23BE0A] font-[600]">#{tags[2]} </span>
                    <span className=" font-[600] text-black flex items-center ">
                      <IoLocationOutline></IoLocationOutline> Published :{" "}
                      {yearOfPublishing}
                    </span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <span className="text-gray-700 text-[18px] flex items-center">
                      <IoMdPeople></IoMdPeople>
                      <span className="ml-3"> Publisher</span> : {publisher}
                    </span>
                    <span className="text-gray-700 ml-10 text-[18px] flex items-center">
                      <SiPowerpages></SiPowerpages>
                      <span className="ml-3"> Pages</span> : {publisher}
                    </span>
                  </span>
    
                  <hr />
    
                  <div className="flex items-center pt-2 space-x-2">
                    
    
                    <button className=" h-9 w-[200px] rounded-3xl btn-active btn-secondary">Category : {category}</button>
                    <button className=" h-9 rounded-3xl btn-active btn-secondary w-[150px]">Ratings : {rating}</button>
                    <Link to={`/details/${bookId}`}><button className="w-[150px] text-white h-9 rounded-3xl btn-active btn-success">View Details</button></Link>
    
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

ThirdCard.propTypes = {

}

export default ThirdCard
