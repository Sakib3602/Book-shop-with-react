import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="hero h-[600px] bg-[#1313130D] px-10 rounded-3xl mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/DgkD4Hf/editura-creator-RRESLg-UIE-Y-unsplash.jpg"
            className="w-[500px] h-[400px] rounded-lg shadow-2xl"
          />
          <div className="w-[800px]">
            <h1 className="text-5xl font-bold leading-loose">Books To Freshen <br />
            Up Your Bookshelf</h1>
           
          <Link to={"/listedbook"}>  <button className="btn bg-[#23BE0A] text-white mt-5">View The List</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
