import { useLoaderData, useNavigation } from "react-router-dom";
import Hero from "./Hero";
import FirstCard from "./FirstCard";
import {ScaleLoader} from 'react-spinners'

const Home = () => {

    const use = useLoaderData()


    
    const navi = useNavigation()


    if(navi.state === "loading") return <ScaleLoader color="#36d7b7" />
    

    

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