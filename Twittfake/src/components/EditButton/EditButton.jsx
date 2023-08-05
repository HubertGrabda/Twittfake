import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import './EditButton.scss'


const EditButton = () => {
  return <FontAwesomeIcon icon={faEdit} className='edit-icon' />;
};

export default EditButton;
