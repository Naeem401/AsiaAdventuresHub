import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import Banner from "../../header/Banner/Banner";
import MyListSpotCard from "../../components/MyListSpotCard/MyListSpotCard";

const Mylist = () => {
    const { user } = useAuth() || {};
    const [spots, setSpot] = useState([]);
    useEffect(() => {
      fetch(`http://localhost:5000/myTouristsSpot/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setSpot(data);
        });
    }, [user]);
    console.log(spots)
    return (
        <div>
            <Banner/>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-10 container mx-auto ">
        {spots?.length > 6
              ? spots
                  ?.slice(0, 6)
                  .map((spot) => <MyListSpotCard key={spot._id} spot={spot} />)
              : spots?.map((spot) => (
                  <MyListSpotCard key={spot._id} spot={spot} />
                ))}
        </div>
        {spots?.length > 6 && (
            <div className="mt-10 flex justify-center">
              <button className="text-white bg-[#FF497C] border-0 py-2 px-6 focus:outline-none hover:bg-[#ab3154] rounded font-semibold duration-200">
                See All
              </button>
            </div>
          )}
        </div>
    );
};

export default Mylist;