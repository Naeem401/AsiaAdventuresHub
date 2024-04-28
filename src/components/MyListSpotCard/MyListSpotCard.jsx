import { Link } from "react-router-dom";


const MyListSpotCard = ({spot}) => {
    console.log(spot)
    const {image, tourists_spot_name, country_Name, travel_time, average_cost, totalVisitorsPerYear, selectedSeasonality, _id} = spot || {};
    return (
        <div className="shadow-md border">
            <img src={image} alt="" />
            <div className="bg-gray-50 p-4">
                <h2 className="font-bold text-xl text-black">{tourists_spot_name}</h2>
                <h4 className="font-semibold test-[18px] text-black mt-2">Country: {country_Name}</h4>
                <p className="mt-2">Average_cost: {average_cost}</p>
                <p className="mt-2">Total Visitors PerYear: {totalVisitorsPerYear}</p>
                <p className="mt-2">Travel Time: {travel_time}</p>
                <p className="mt-2">Seasonality: {selectedSeasonality}</p>
                <Link to={`/tourists-spot-details/${_id}`}>
                <button className="btn bg-[#ff497c] text-white font-bold mt-2">View Details</button>
                </Link>
               
            </div>
        </div>
    );
};

export default MyListSpotCard;