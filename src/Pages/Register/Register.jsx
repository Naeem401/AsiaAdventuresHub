import { Link, useLocation, useNavigate } from 'react-router-dom';
import bg from '../../assets/img/bg3.jpg';
import toast, { Toaster } from 'react-hot-toast';
import useAuth from '../../Hook/useAuth';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {
        user,
        createUser,
        updateUserProfile,
        loading,
        setLoading,
        googleSignIn,
        githubSignIn,
    } = useAuth() || {};

    const handelRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
    
        // Password Validation
        if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
                password
            )
        ) {
            toast.error(
                "Password must have at least 6 characters, a capital letter, a special character, and a number."
            );
            return;
        }
    
        // Email Validation
        if (!/^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            toast.error("Please enter a valid email");
            return;
        }
    
        // Create user
        createUser(email, password)
            .then((result) => {
                updateUserProfile({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        toast.success("Registration successful");
                        setLoading(false);
                        navigate(location?.state ? location.state : "/");
                        toast.success("Registration successful");
                    })
                    .catch((err) => {
                        setLoading(false);
                        toast.error(err.message);
                    });
            })
            .catch((err) => {
                toast.error(err.message);
                setLoading(false);
            });
    };
    const handleGoogleSignIn = () => {
        googleSignIn()
          .then((result) => {
            setLoading(false);
            navigate(location?.state ? location.state : "/");
            toast.success("Login successful");
          })
          .catch((err) => {
            setLoading(false);
            toast.error(err.message);
          });
      };
    return (
        <div className='object-cover bg-opacity-80 bg-no-repeat min-h-[calc(100vh-46px)] flex justify-center items-center' style={{ backgroundImage: `url(${bg})` }}>
            <div className='className="shadow-lg p-5 bg-[#1a103d] bg-opacity-30  lg:w-1/3 mx-auto"'>
            <h1 className="text-2xl font-bold mb-4 text-center text-white">Create an Account</h1>
        <p className="text-center text-white mb-4">
          Welcome! Please fill out the form below to create your account.
        </p>
                <form onSubmit={handelRegister} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-1 font-bold text-white">Name</label>
                        <input type="name" id="name" name="name" className="w-full border bg-gray-300 rounded-md py-2 px-3" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 font-bold text-white">Email
                        </label>
                        <input type="email" id="email" name="email" className="w-full border bg-gray-300 rounded-md py-2 px-3" />
                    </div>
                    <div>
                        <label htmlFor="photoURL" className="block mb-1 font-bold text-white">PhotoURL
                        </label>
                        <input type="photoURL" id="photoURL" name="photoURL" className="w-full border bg-gray-300 rounded-md py-2 px-3" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 font-bold text-white">Password
                        </label>
                        <input type="password" id="password" name="password" className="w-full border bg-gray-300 rounded-md py-2 px-3" />
                    </div>
                    <input type="submit" value="Register" className='btn w-full font-bold' />
                </form>
                <div  className="mt-4 text-white">
                    <p>Don't have an account? <Link to="/register" className="text-green-300">Register here</Link></p>
                </div>
                <div className="mt-4 text-white">
                    <p >Or login with:</p>
                    <div>
                        <button onClick={() => handleGoogleSignIn()} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
                            Google
                        </button>
                        <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            GitHub
                        </button>
                    </div>
                </div>

            </div>
            <Toaster
          toastOptions={{
            duration: 3000,
          }}
        />
        </div>
    );
};

export default Register;