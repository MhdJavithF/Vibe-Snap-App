import { BsPlusLg } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";


const AddPost = () => {
  const location = useLocation();
  return (
    <div>
      <Link to={`/new-post`} state={{ from: location.pathname }}>
        <div className="add">
              <BsPlusLg />
        </div>
      </Link>
    </div>
  )
}

export default AddPost