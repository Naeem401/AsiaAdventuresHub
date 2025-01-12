import { Link, useNavigate } from 'react-router-dom';
import bg from '../../assets/img/bg3.jpg'
import useAuth from '../../Hook/useAuth';
import toast from 'react-hot-toast';
const LoginPage = () => {
    const navigate = useNavigate();
    const {
      signInUser,
      googleSignIn,
      gitHubSignIn,
      setLoading
    } = useAuth();
      const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        setLoading(false);
        navigate(location?.state ? location.state : "/");
        toast.success("Login successful");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };
  const handelGitHubSignIn = () => {
    gitHubSignIn()
      .then(() => {
        setLoading(false);
        navigate(location?.state ? location.state : "/");
        toast.success("Login successful");
      })
      .catch(error => {
        console.error(error);
        toast.error(error.message);
      });
  };
    const handelLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
         // Sign In
    signInUser(email, password)
      .then(() => {
        setLoading(false);
        navigate(location?.state ? location.state : "/");
        toast.success("Login successful");
      })
      .catch((err) => {
        console.log(err)
        setLoading(false);
        toast.error(err.message);
      });
    }
    return (
        <div className='object-cover bg-opacity-80 bg-no-repeat min-h-[calc(100vh-46px)] flex justify-center items-center' style={{ backgroundImage: `url(${bg})` }}>
            <div className='className="shadow-lg p-5 bg-[#1a103d] bg-opacity-30  lg:w-1/3 mx-auto"'>
            <h1 className="text-2xl font-bold mb-4 text-center text-white">Login to Your Account</h1>
        <p className="text-center text-white mb-4">
          Please enter your credentials to access your account.
        </p>
                <form onSubmit={handelLogin} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-1 font-semibold text-white">Email</label>
                        <input type="email" id="email" name="email" className="w-full border  rounded-md py-2 px-3" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 font-semibold text-white">Password
                        </label>
                        <input type="password" id="password" name="password" className="w-full border  rounded-md py-2 px-3" />
                    </div>
                    <input type="submit" value="Login" className='btn w-full font-bold' />
                </form>
                <div className="mt-4 text-white">
                    <p>Don't have an account? <Link to="/register" className='text-green-300'>Register here</Link></p>
                </div>
                <div className="mt-4">
                    <p className='text-white'>Or login with:</p>
                    <div>
                        <button onClick={()=> handleGoogleSignIn()} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
                            Google
                        </button>
                        <button onClick={() => handelGitHubSignIn()} className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            GitHub
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default LoginPage;