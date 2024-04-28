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
        fetch('http://localhost:5000/countries')
          .then((res) => res.json())
          .then((data) => {
            setCountrysLoading(false)
            setCountrys(data)
          });
          fetch('http://localhost:5000/addTouristsSpot')
          .then((res) => res.json())
          .then((data) => setAllTouristsSpot(data));
      }, []);
      console.log(allTouristsSpot)
    return (
        <div>
            <Banner/>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-10 container mx-auto ">
          {
            countrysLoading && <p className="font-bold mt-4 text-2xl">Brand Loading...</p>
          }
          {countrys?.map((country) => (
            <CountryCard key={country._id} country={country}/>
          ))}
        </div>
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

export default Home;