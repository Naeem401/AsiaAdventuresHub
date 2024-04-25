import { Link } from 'react-router-dom';
import bg from '../../assets/img/bg3.jpg'

const Register = () => {

    const handelRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confrumPassword = form.confrumPassword.value
        const photoURL = form.photoURL.value;
        console.log(email, password, name, photoURL, confrumPassword)
    }
    return (
        <div className='object-cover bg-opacity-80 bg-no-repeat min-h-[calc(100vh-46px)] flex justify-center items-center' style={{ backgroundImage: `url(${bg})` }}>
        <div className='className="shadow-lg p-5 bg-[#1a103d] bg-opacity-30  w-1/3 mx-auto"'>
            <h1 className="text-2xl font-semibold mb-4 text-center">Register</h1>
            <form onSubmit={handelRegister} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-1">name</label>
                    <input type="name" id="name" name="name" className="w-full border bg-gray-300 rounded-md py-2 px-3" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1">Email
                    </label>
                    <input type="email" id="email" name="email" className="w-full border bg-gray-300 rounded-md py-2 px-3" />
                </div>
                <div>
                    <label htmlFor="photoURL" className="block mb-1">photoURL
                    </label>
                    <input type="photoURL" id="photoURL" name="photoURL" className="w-full border bg-gray-300 rounded-md py-2 px-3" />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-1">password
                    </label>
                    <input type="password" id="password" name="password" className="w-full border bg-gray-300 rounded-md py-2 px-3" />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-1">password
                    </label>
                    <input type="password" id="password" name="confrumPassword" className="w-full border bg-gray-300 rounded-md py-2 px-3" />
                </div>
                <input type="submit" value="Login" className='btn w-full'/>
            </form>
            <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="2000" className="mt-4">
      <p>Don't have an account? <Link to="/register" className="text-blue-500">Register here</Link></p>
    </div>
            <div className="mt-4">
                <p >Or login with:</p>
                <div>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
                        Google
                    </button>
                    <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        GitHub
                    </button>
                </div>
            </div>

        </div>

    </div>
    );
};

export default Register;