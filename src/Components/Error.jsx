import { useRouteError } from "react-router-dom";
import { BiErrorCircle } from 'react-icons/bi';


const Error = () => {
  const errorHandler = useRouteError();
  console.log(errorHandler);
  return (
    <div className="my-20">
        <p> <BiErrorCircle className="text-6xl text-red-600 mx-[575px]"></BiErrorCircle></p>
      <h1  className="text-5xl font-semibold my-3">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorHandler.statusText || errorHandler.message}</i>
      </p>
    </div>
  );
};

export default Error;
