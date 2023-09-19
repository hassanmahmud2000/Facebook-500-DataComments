import { Link, NavLink, Navigate } from "react-router-dom";

const SingelUser = ({user}) => {
    return (
        <div className="bg-sky-100 shadow-inner p-4 rounded-md text-left">
            <h1 className="text-xl font-bold">ID : {user.id}</h1>
            <h1 className="text-2xl font-semibold">Name : {user.name}</h1>
            <p>Email : {user.email}</p>
            <NavLink to={`/user/${user.id}`}><button className="w-full bg-sky-600 p-2 rounded-md text-white">Show Details</button></NavLink>
        </div>
    );
};

export default SingelUser;