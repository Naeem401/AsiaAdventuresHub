import { useEffect, useState } from "react";
import Banner from "../../header/Banner/Banner";
import TouristsSpot from "../../components/TouristsSpot/TouristsSpot";


const AllTouristsSpot = () => {
    const [allTouristsSpot, setAllTouristsSpot] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/addTouristsSpot')
        .then((res) => res.json())
        .then((data) => setAllTouristsSpot(data));
    },[])
    return (
        <div>
            <Banner/>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-10 container mx-auto ">
        {allTouristsSpot?.length > 6
              ? allTouristsSpot
                  ?.slice(0, 6)
                  .map((spot) => <TouristsSpot key={spot._id} spot={spot} />)
              : allTouristsSpot?.map((spot) => (
                  <TouristsSpot key={spot._id} spot={spot} />
                ))}
        </div>
        {allTouristsSpot?.length > 6 && (
            <div className="mt-10 flex justify-center">
              <button className="text-white bg-[#FF497C] border-0 py-2 px-6 focus:outline-none hover:bg-[#ab3154] rounded font-semibold duration-200">
                See All
              </button>
            </div>
          )}
        </div>
    );
};

export default AllTouristsSpot;