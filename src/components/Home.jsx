import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";
import FirstCard from "./FirstCard";


const Home = () => {

    const use = useLoaderData()
    console.log(use)

    return (
        <div>
            <Hero></Hero>
            <h1 className="text-center text-[50px] font-[600] mt-10">Books</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {
                use.map((e,i) => <FirstCard key={i} e={e}></FirstCard>)
            }
            </div>
        </div>
    );
};

export default Home;