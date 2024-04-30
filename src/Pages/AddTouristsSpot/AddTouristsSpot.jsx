import bg from '../../assets/img/bg3.jpg'

const AddTouristsSpot = () => {
const handelSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const country_Name = form.country_Name.value;
    const average_cost = form.average_cost.value;
    const image = form.image.value;
    const location = form.location.value;
    const seasonalitySelect = form.querySelector('#seasonality');
    const selectedSeasonality = seasonalitySelect.value;
    const travel_time = form.travel_time.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const short_description = form.short_description.value;
    const info = {
        userName, userEmail, tourists_spot_name, country_Name, average_cost, image, location, selectedSeasonality, travel_time, totalVisitorsPerYear, short_description
    }
    console.log(info)
    fetch("https://asia-adventures-hub-server.vercel.app/addTouristsSpot", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body:JSON.stringify(info)
      })
        .then(res => res.json())
        .then(data => {
          if (data?.insertedId) {
          alert("bhai data insert hoice")
        }
      })
}

    return (
        <div className='object-cover bg-opacity-80 bg-no-repeat' style={{backgroundImage: `url(${bg})`}}>
            <div className="container mx-auto">
            <div className="shadow-lg p-5 bg-[#1a103d] bg-opacity-30  w-4/5 mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center text-white">Add Tourists Spot</h1>
            <form onSubmit={handelSubmit} className="space-y-4">
                <div className="lg:flex gap-8">
                    {/* left */}
                    <div className="lg:flex-1">
                    <div>
                    <label htmlFor="userName" className="block mb-1 text-[#FFF] font-bold">User Name</label>
                    <input type="text" id="userName" name="userName" className="w-full border rounded-md py-2 px-3" />
                </div>
                <div>
                    <label htmlFor="userEmail" className="block mb-1 text-[#FFF] font-bold">User Email</label>
                    <input type="text" id="userEmail" name="userEmail" className="w-full border rounded-md py-2 px-3" />
                </div>
                    <div>
                    <label htmlFor="tourists_spot_name" className="block mb-1 text-[#FFF] font-bold">Tourists Spot Name</label>
                    <input type="text" id="tourists_spot_name" name="tourists_spot_name" className="w-full border rounded-md py-2 px-3" />
                </div>
                <div>
                    <label htmlFor="country_Name" className="block mb-1 text-[#FFF] font-bold">Country Name</label>
                    <input type="text" id="country_Name" name="country_Name" className="w-full border rounded-md py-2 px-3" />
                </div>
                <div>
                    <label htmlFor="average_cost" className="block mb-1 text-[#FFF] font-bold">Average Cost</label>
                    <input type="text" id="average_cost" name="average_cost" className="w-full border rounded-md py-2 px-3" />
                </div>
                    </div>
                    {/* right */}
                    <div className="lg:flex-1">
                    <div>
                    <label htmlFor="image" className="block mb-1 text-[#FFF] font-bold">Image URL</label>
                    <input type="text" id="image" name="image" className="w-full border rounded-md py-2 px-3" />
                </div>
                <div>
                    <label htmlFor="location" className="block mb-1 text-[#FFF] font-bold">Location</label>
                    <input type="text" id="location" name="location" className="w-full border rounded-md py-2 px-3" />
                </div>
                <div>
                    <label htmlFor="seasonality" className="block mb-1 text-[#FFF] font-bold">Seasonality</label>
                    <select
                name="seasonality"
                id="seasonality"
                className="w-full p-2 border rounded-md"
                type="text"
                placeholder="Select Seasonality"
              >
                <option value="Four_Season_Model" selected>
                Four-Season Model
                </option>
                <option value="Tropical_Seasonality" selected>
                  Tropical Seasonality
                </option>
                <option value="Special_Event_Seasonality" selected>
                Special Event Seasonality
                </option>
                <option value="Off_Peak_Season" selected>
                Off-Peak Season
                </option>
              </select>
                </div>
                <div>
                    <label htmlFor="travel_time" className="block mb-1 text-[#FFF] font-bold">Travel Time</label>
                    <input type="text" id="travel_time" name="travel_time" className="w-full border rounded-md py-2 px-3" />
                </div>
                <div>
                    <label htmlFor="totalVisitorsPerYear" className="block mb-1 text-[#FFF] font-bold">Total Visitors Per Year</label>
                    <input type="text" id="totalVisitorsPerYear" name="totalVisitorsPerYear" className="w-full border rounded-md py-2 px-3" />
                </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="short_description" className="block mb-1 text-[#FFF] font-bold">Short Description</label>
                    <textarea id="short_description" name="short_description" className="w-full border rounded-md py-2 px-3"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 w-full">Add</button>
            </form>
            </div>
        </div>
        </div>
        
    );
};

export default AddTouristsSpot;