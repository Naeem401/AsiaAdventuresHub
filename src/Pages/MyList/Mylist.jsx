import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import Banner from "../../header/Banner/Banner";
import MyListSpotCard from "../../components/MyListSpotCard/MyListSpotCard";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

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
    const handleUpdate = (spotId) => {
     
      console.log(`Update spot with ID: ${spotId}`);
    };
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
          fetch(`http://localhost:5000/myTouristsSpot/${id}`, {
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
      <h2 className="text-2xl font-bold my-4 text-center mt-4">My Tourist Spots List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Location</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-center">Update</th>
              <th className="py-3 px-6 text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {spots.map((spot) => (
              <tr key={spot.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{spot.name}</td>
                <td className="py-3 px-6 text-left">{spot.location}</td>
                <td className="py-3 px-6 text-left">{spot.description}</td>
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