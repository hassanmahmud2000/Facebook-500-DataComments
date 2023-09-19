import { NavLink, Outlet } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <h1 className="text-5xl font-bold">Facebook</h1>
            <nav className="mt-2">
                 <NavLink to='/'><button className="md:w-[120px] sm:w-[110px] rounded-md bg-sky-500 ml-3 p-2 text-white font-semibold">Home</button></NavLink>
                 <NavLink to='/post'><button className="md:w-[120px] sm:w-[110px] rounded-md bg-sky-500 ml-3 p-2 text-white font-semibold">Post</button></NavLink>
                 <NavLink to='comments'><button className="md:w-[120px] sm:w-[110px] rounded-md bg-sky-500 ml-3 p-2 text-white font-semibold">Comments</button></NavLink>
                 <NavLink to='user'><button className="md:w-[120px] sm:w-[110px] rounded-md bg-sky-500 ml-3 p-2 text-white font-semibold">User</button></NavLink>
            </nav>
            
             <Outlet ></Outlet>
              <footer className="mt-3">
                <h1 className="text-2xl font-semibold">Footer !!!!</h1>
                <p><small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi nisi, doloremque quasi dicta magnam unde dignissimos doloribus similique eveniet?</small></p>
              </footer>
        </div>
    );
};

export default Home;