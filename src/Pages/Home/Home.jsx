import { useEffect, useState } from "react";
import Banner from "../../header/Banner/Banner";
import CountryCard from "../../components/CountryCard/CountryCard";
import TouristsSpot from "../../components/TouristsSpot/TouristsSpot";


const Home = () => {
    const [countrys, setCountrys] = useState([]);
    const [countrysLoading, setCountrysLoading] = useState(false);
    const [allTouristsSpot, setAllTouristsSpot] = useState([]);
    useEffect(() => {
        setCountrysLoading(true)
        fetch('https://asia-adventures-hub-server.vercel.app/countries')
          .then((res) => res.json())
          .then((data) => {
            setCountrysLoading(false)
            setCountrys(data)
          });
          fetch('https://asia-adventures-hub-server.vercel.app/addTouristsSpot')
          .then((res) => res.json())
          .then((data) => setAllTouristsSpot(data));
      }, []);
      console.log(allTouristsSpot)
    return (
        <div>
            <Banner/>
            <div className="container mx-auto py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Explore Tourist Countries in Southeast Asia</h1>
      <p className="text-lg text-white mb-4">
        Discover diverse and exciting destinations across Southeast Asia. <br /> Click on a country below to explore its tourist spots.
      </p>
      </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-6 container mx-auto ">
          {
            countrysLoading && <div className="flex justify-center w-full"><span className="loading loading-spinner loading-lg mx-auto"></span></div>
          }
          {countrys?.map((country) => (
            <CountryCard key={country._id} country={country}/>
          ))}
        </div>
        <div className="container mx-auto py-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Explore Tourist Spots in Southeast Asia</h1>
      <p className="text-lg mb-8">
        Discover amazing tourist destinations across Southeast Asia, <br /> from bustling cities to serene natural landscapes.
      </p>
            </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-5 container mx-auto ">
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

export default Home;