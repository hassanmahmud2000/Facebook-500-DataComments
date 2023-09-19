import { useLoaderData, useNavigate } from "react-router-dom";

const ShowDetails = () => {
    const backButton = useNavigate ();
    const showAll = useLoaderData ();
    const handler= () => {
        backButton (-1);
    } 
    console.log(showAll);
    return (
        <div className="my-6">
            <h1 className="text-2xl">ID : {showAll.id}</h1>
            <h1 className="text-5xl font-bold">Name : {showAll.name}</h1>
            <h1 className="text-2xl">Body : {showAll.body}</h1>
            <button onClick={handler} className="w-[300px] p-2 mt-5 rounded-md text-2xl font-semibold bg-red-600 text-white">GO BACK</button>
        </div>
    );
};

export default ShowDetails;