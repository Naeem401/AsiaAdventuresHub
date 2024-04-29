import { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import toast, { Toaster } from "react-hot-toast";


const NavBar = () => {
    const [sideOpen, setSideOpen] = useState(false);
    const navigate = useNavigate();
    const { user, signOutUser } = useAuth() || {};
    // State for the theme
    const [theme, setTheme] = useState('light');
    // State to indicate whether the theme has been loaded from localStorage or not
    const [themeLoaded, setThemeLoaded] = useState(false);

    // update state on toggle
    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('synthwave');
            localStorage.setItem('theme', 'synthwave');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    }

    useEffect(() => {
        // Load theme from localStorage when the component mounts
        const localTheme = localStorage.getItem('theme');
        if (localTheme) {
            setTheme(localTheme);
            setThemeLoaded(true);
        } else {
            // If theme is not found in localStorage, set the theme to light
            localStorage.setItem('theme', 'light');
            setThemeLoaded(true);
        }
    }, []);

    // Update the data-theme attribute when theme changes
    useEffect(() => {
        if (themeLoaded) {
            document.querySelector('html').setAttribute('data-theme', theme);
        }
    }, [theme, themeLoaded]);

    const handleLogOut = () => {
        signOutUser()
            .then((result) => toast.success("successfully Logout"))
            .catch((err) => toast.error(err));
    };
    return (
        <div className="w-full">
            <header className=" shadow-lg  flex py-4 w-full dark:bg-[#120505] px-2 md:px-[50px] lg:px-[80px] xl:px-[120px] 2xl:px-[150px]">
                <Link to='/' className="md:border-r flex flex-shrink-0 items-center">
                    <h2 className="font-bold text-xl mr-2">Asia Adventures Hub</h2>
                </Link>
                <nav className="header-links md:contents font-medium text-base  hidden ">
                    <ul className="flex gap-8 items-center ml-4 xl:ml-8 mr-auto w-full justify-center dark:text-white">
                        <li>
                            <NavLink
                                to="/"
                                className={({isActive}) => isActive? 'text-primary font-bold' : 'font-bold'}
                            >
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/tourists-spot-all"
                               className={({isActive}) => isActive? 'text-primary font-bold' : 'font-bold'}
                            >
                                <span>All Tourists Spot</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/add_tourists_spot"
                              className={({isActive}) => isActive? 'text-primary font-bold' : 'font-bold'}
                            >
                                <span>Add Tourists Spot</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/my-list"
                                className={({isActive}) => isActive? 'text-primary font-bold' : 'font-bold'}
                            >
                                <span>My List</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="relative md:border-l flex items-center  justify-end w-full md:w-auto pl-5 ">
                    <label className="cursor-pointer grid place-items-center mr-2">
                        <input type="checkbox" checked={theme === 'synthwave'} onChange={handleToggle} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                    {user ? (
                        <div>
                            <button className="dropdown border-2 border-[#FF497C] rounded-full w-[40px] z-50">
                                <img className="rounded-full" src={user?.photoURL} alt="" />
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><p className="text-lg font-semibold">{user?.displayName}</p></li>
                                    <li> <button
                                        onClick={() => handleLogOut()}
                                        className="bg-[#FF497C] hover:bg-[#ab3154] duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded cursor-pointer"
                                    >
                                        logout
                                    </button></li>
                                </ul>
                            </button>
                        </div>
                    ) : (
                        <div className="flex gap-4">
                            <button
                                onClick={() => navigate("/login")}
                                className="bg-[#FF497C] hover:bg-[#ab3154]  duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => navigate("/register")}
                                className="bg-[#FF497C] hidden md:block hover:bg-[#ab3154]  duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded"
                            >
                                Register
                            </button>
                        </div>
                    )}
                </div>
                <button
                    onClick={() => setSideOpen(!sideOpen)}
                    className="text-4xl text-[#FF497C] flex items-center md:hidden ml-3"
                >
                    {sideOpen ? <RxCross2 /> : <MdMenu />}

                </button>
            </header>
            <div className={`absolute ${sideOpen ? "" : "hidden"
                } md:hidden  bg-white shadow-lg  w-56 min-h-screen overflow-y-auto top-0 left-0 ease-in-out duration-300 dark:bg-[#120505] dark:text-white z-50`}>
                <div className="p-4">
                    <Link to="/" className=" flex-shrink-0 flex items-center ">
                        <h2>Asia Adventures Hub</h2>
                    </Link>
                    <ul className="mt-6 flex flex-col gap-4 ml-5">
                        <li>
                            <NavLink
                                onClick={() => setSideOpen(!sideOpen)}
                                to="/"
                               className={({isActive}) => isActive? 'text-primary font-bold' : 'font-bold'}
                            >
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={() => setSideOpen(!sideOpen)}
                                to="/tourists-spot-all"
                                className={({isActive}) => isActive? 'text-primary font-bold' : 'font-bold'}
                            >
                                <span>All Tourists Spot</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={() => setSideOpen(!sideOpen)}
                                to="/add_tourists_spot"
                               className={({isActive}) => isActive? 'text-primary font-bold' : 'font-bold'}
                            >
                                <span>Add Tourists Spot</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={() => setSideOpen(!sideOpen)}
                                to="/my-list"
                                className={({isActive}) => isActive? 'text-primary font-bold' : 'font-bold text-white'}
                            >
                                <span>My List</span>
                            </NavLink>
                        </li>
                    </ul>
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

export default NavBar;