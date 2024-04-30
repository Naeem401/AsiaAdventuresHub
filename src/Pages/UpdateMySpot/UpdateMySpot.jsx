import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateMySpot = () => {
    const mySpot = useLoaderData();
    const { userName, image, tourists_spot_name, country_Name, travel_time, totalVisitorsPerYear, average_cost, location, short_description, _id} = mySpot || {};
    const handleUpdateSpot = e => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const average_cost = form.average_cost.value;
        const image = form.image.value;
        const location = form.location.value;
        const travel_time = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const short_description = form.short_description.value;
        const info = {
            userName, tourists_spot_name, country_Name, average_cost, image, location, travel_time, totalVisitorsPerYear, short_description
        }

      
        fetch(`http://localhost:5000/addTouristsSpot/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourists Spot Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    console.log(userName)
    return (
        <div>
           <div className="container mx-auto">
            <div className="shadow-lg p-5 bg-[#1a103d] bg-opacity-30  w-4/5 mx-auto">
            <h1 className="text-2xl font-semibold mb-4 text-center">Add Tourists Spot</h1>
            <form onSubmit={handleUpdateSpot} className="space-y-4">
                <div className="lg:flex gap-8">
                    {/* left */}
                    <div className="lg:flex-1">
                    <div>
                    <label htmlFor="userName" className="block mb-1 text-[#FFF]">User Name</label>
                    <input type="text" id="userName" name="userName" defaultValue={userName}  className="w-full border  rounded-md py-2 px-3" />
                </div>
                    <div>
                    <label htmlFor="tourists_spot_name" className="block mb-1 text-[#FFF]">Tourists Spot Name</label>
                    <input type="text" id="tourists_spot_name" name="tourists_spot_name" defaultValue={tourists_spot_name} className="w-full border rounded-md py-2 px-3" />
                </div>
                <div>
                    <label htmlFor="country_Name" className="block mb-1 text-[#FFF]">Country Name</label>
                    <input type="text" id="country_Name" name="country_Name" defaultValue={country_Name}  className="w-full border rounded-md py-2 px-3" />
                </div>
                <div>
                    <label htmlFor="average_cost" className="block mb-1 text-[#FFF]">Average Cost</label>
                    <input type="text" id="average_cost" name="average_cost" defaultValue={average_cost} className="w-full border rounded-md py-2 px-3" />
                </div>
                    </div>
                    {/* right */}
                    <div className="lg:flex-1">
                    <div>
                    <label htmlFor="image" className="block mb-1 text-[#FFF]">Image URL</label>
                    <input type="text" id="image" name="image" defaultValue={image} className="w-full border rounded-md py-2 px-3" />
                </div>
                <div>
                    <label htmlFor="location" className="block mb-1 text-[#FFF]">Location</label>
                    <input type="text" id="location" name="location" defaultValue={location} className="w-full border rounded-md py-2 px-3" />
                </div>
                <div>
                    <label htmlFor="travel_time" className="block mb-1 text-[#FFF]">Travel Time</label>
                    <input type="text" id="travel_time" name="travel_time" defaultValue={travel_time} className="w-full border rounded-md py-2 px-3" />
                </div>
                <div>
                    <label htmlFor="totalVisitorsPerYear" className="block mb-1 text-[#FFF]">Total Visitors Per Year</label>
                    <input type="text" id="totalVisitorsPerYear" name="totalVisitorsPerYear" defaultValue={totalVisitorsPerYear} className="w-full border rounded-md py-2 px-3" />
                </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="short_description" className="block mb-1 text-[#FFF]">Short Description</label>
                    <textarea id="short_description" name="short_description" defaultValue={short_description} className="w-full border rounded-md py-2 px-3"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full">Updated Spot</button>
            </form>
            </div>
        </div>
        </div>
    );
};

export default UpdateMySpot;