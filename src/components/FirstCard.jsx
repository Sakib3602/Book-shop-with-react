import { Link } from "react-router-dom";

const FirstCard = ({e}) => {

    const {image,tags,bookName,author,bookId} = e
    
    
  return (
    <div>
       
    <Link to={`/details/${bookId}`}>
    <div className="card p-8 w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="space-y-5 mt-4">
            
            <div className="flex space-x-2">
            <div className="badge  bg-gray-100 text-[#23BE0A]">{tags[0]}</div>
            <div className="badge bg-gray-100 text-[#23BE0A]">{tags[1]}</div>
            <div className="badge bg-gray-100 text-[#23BE0A]">{tags[2]}</div>
            
            </div>
          <h2 className="card-title flex-grow">
            {bookName}
            
          </h2>
          <p>By : {author} </p>

          <hr />
          <div className="flex justify-between">
            <h1>Fiction</h1>

            <h1>5.00 </h1>
            
          </div>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default FirstCard;
