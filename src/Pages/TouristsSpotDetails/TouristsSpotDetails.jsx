import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const TouristsSpotDetails = () => {
    const { id } = useParams()
    const [singleSpot, setSingleSpot] = useState({});
    const [allTouristsSpot, setAllTouristsSpot] = useState([]);
    useEffect(() => {
        fetch('https://asia-adventures-hub-server.vercel.app/addTouristsSpot')
            .then((res) => res.json())
            .then((data) => setAllTouristsSpot(data));
        if (allTouristsSpot) {
            const singl = allTouristsSpot.find(item => item._id == id);
            setSingleSpot(singl)
        }

    }, [id, allTouristsSpot])
    const { image, tourists_spot_name, country_Name, travel_time, selectedSeasonality, totalVisitorsPerYear, average_cost, location, short_description} = singleSpot || {};
    return (
        <div className="mt-10 container mx-auto p-4 bg-lime-100 mb-8 rounded-lg">
            <h2 className="font-bold text-3xl text-center mt-2 mb-4 text-black">Tourists Spot Details</h2>
            <div className="lg:flex justify-center items-center gap-8">
                <div className="p-8 flex justify-center md:p-10 flex-1 lg:border-r">
                    <img className="w-full" src={image} alt="" />
                </div>
                <div className="flex-1">
                    <h2 className="font-bold text-xl text-black">Tourists Spot Name: <span className="font-semibold text-[18px] text-black"> {tourists_spot_name}</span></h2>
                    <h4 className="font-bold text-xl text-black mt-2">Country Name: <span className="font-semibold text-[18px] text-black">{country_Name}</span></h4>
                    <div className="flex justify-between items-center mt-2">
                        <p className="font-bold text-xl text-black">Travel Time: <span className="font-semibold text-base">{travel_time}</span></p>
                        <p className="font-bold text-xl text-black">Seasonality: <span className="font-semibold text-base">{selectedSeasonality}</span></p>
                    </div>
                    <p className="font-bold text-xl text-black mt-2">Total Visitors PerYea: <span className="font-semibold text-base">{totalVisitorsPerYear}</span></p>
                    <div className="flex justify-between items-center mt-2">
                        <p className="font-bold text-xl text-black">Average Cost: <span className="font-semibold text-base">{average_cost}</span></p>
                        <p className="font-bold text-xl text-black">Location: <span className="font-semibold text-base">{location}</span></p>
                    </div>
                    <p className="font-semibold text-basen text-gray-500 mt-2">{short_description}</p>
                </div>

            </div>
        </div>
    );
};

export default TouristsSpotDetails;