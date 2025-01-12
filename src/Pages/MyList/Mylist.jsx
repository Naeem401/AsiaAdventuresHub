import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import Banner from "../../header/Banner/Banner";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Mylist = () => {
    const { user } = useAuth() || {};
    const [spots, setSpot] = useState([]);
    useEffect(() => {
      fetch(`https://asia-adventures-hub-server.vercel.app/myTouristsSpot/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setSpot(data);
        });
    }, [user]);
    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          fetch(`https://asia-adventures-hub-server.vercel.app/myTouristsSpot/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          const remainingdata = spots.filter(spot => spot._id !== id);
          setSpot(remainingdata)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      })
        }
      });
      
      console.log("Delete")
    }
    return (
      <div>
      <Banner />
      
      <div className="container mx-auto py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Explore Amazing Tourist Spots</h1>
      <p className="text-lg text-gray-600 mb-4">
        Discover breathtaking destinations and must-visit attractions from <br /> around the world.
        Browse through our curated list of tourist spots and <br /> start planning your next adventure!
      </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
              <th className="py-3 px-6 text-left">Tourists Spot Name</th>
              <th className="py-3 px-6 text-left">Location</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-center">Update</th>
              <th className="py-3 px-6 text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {spots.map((spot) => (
              <tr key={spot.id} className="border-b border-gray-200 hover:bg-gray-100 font-bold">
                <td className="py-3 px-6 text-left whitespace-nowrap">{spot.tourists_spot_name}</td>
                <td className="py-3 px-6 text-left">{spot.location}</td>
                <td className="py-3 px-6 text-left">{spot.short_description}</td>
                <td className="py-3 px-6 text-center">
                 <Link to={`/update-my-spot/${spot._id}`}>
                 <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Update
                  </button>
                 </Link>
                </td>
                <td className="py-3 px-6 text-center">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(spot._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Mylist;