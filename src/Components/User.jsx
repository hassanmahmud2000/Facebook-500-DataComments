import { useLoaderData } from "react-router-dom";
import SingelUser from "./SingelUser";

const User = () => {
    const users = useLoaderData ()
    return (
        <div>
            <h1 className="text-4xl font-bold">User Page</h1>
            <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ducimus ipsam, delectus quis minus, dolores officia iure, id laboriosam deserunt commodi aliquam ex totam eligendi cupiditate quos eius dolor illo.</small></p>
             <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3 mt-5">
                {
                users.map (user => <SingelUser key={user.id} user={user}></SingelUser> )
                }
             </div>
        </div>
    );
};

export default User;