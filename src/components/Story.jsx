import { useLoaderData } from "react-router-dom";
import StoryCard from "./StoryCard";


const Story = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h1 className="text-center text-[44px] font-[700] mt-6">We Have Brand New {data.length} Story For You</h1>
            <div className="grid grid-cols-3 gap-10 mt-6">
                {
                    data.map((e,i)=> <StoryCard key={i} e={e}></StoryCard>)
                }
            </div>
        </div>
    );
};

export default Story;