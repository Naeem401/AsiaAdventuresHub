import { useEffect, useState } from "react";
import Banner from "../../header/Banner/Banner";
import CountryCard from "../../components/CountryCard/CountryCard";


const Home = () => {
    const [countrys, setCountrys] = useState([]);
    const [countrysLoading, setCountrysLoading] = useState(false);
    useEffect(() => {
        setCountrysLoading(true)
        fetch('http://localhost:5000/countries')
          .then((res) => res.json())
          .then((data) => {
            setCountrysLoading(false)
            setCountrys(data)
          });
      }, []);
      console.log(countrys)
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
        </div>
    );
};

export default Home;