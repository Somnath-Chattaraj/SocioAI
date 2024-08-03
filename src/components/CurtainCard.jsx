import { FaTrophy } from "react-icons/fa";
import { CiStopwatch } from "react-icons/ci";

function CurtainCard({position}){
    return(
        <div className="bg-green-400 rounded-lg w-64 h-80 relative">
            <div className="bg-white flex flex-col justify-center gap-8 items-center h-full hover:hidden w-full z-10 rounded-lg absolute">
                <FaTrophy size={200} color="rgb(10, 92, 54)"/>

                <div className="text-xl font-semibold">
                    {position} Prize

                </div>


            </div>
            <div className="flex flex-col justify-center gap-8 items-center h-full hover:h-0 w-full">
                <CiStopwatch size={50}/>
                <div>Yet to be disclosed</div>

            </div>
            
        </div>
    )
}

export default CurtainCard;