import "./ProfileReference.scss";
import logo from "../../images/twittfake.png";
import { Link } from "react-router-dom";

const ProfileRefernece = () => {
  return (
    <>
      <Link to='/Profile'>
        <div className='profile-ref'>
          <img src={logo} className='profile-ref__picture'></img>
          <h1 className='profile-ref__username'> @Twittfake_Dev </h1>
          <span className='profile-ref__username--underline'></span>
        </div>
      </Link>
    </>
  );
};

export default ProfileRefernece;
