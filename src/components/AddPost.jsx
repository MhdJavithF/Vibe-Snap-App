import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";


const AddPost = () => {
  return (
    <div>
      <Link to={`/new-post`}>
        <div className="add">
              <BsPlusLg />
        </div>
      </Link>
    </div>
  )
}

export default AddPost