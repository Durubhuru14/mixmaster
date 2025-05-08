import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
  const error = useRouteError();
  return (
    <div>
      <h4>{error.message}</h4>
    </div>
  );
};
export default SinglePageError;
