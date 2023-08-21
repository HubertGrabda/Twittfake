import "./ProfileReference.scss";
import logo from "../../images/twittfake.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TweetsContext } from "../../context/Tweet'sState";

const ProfileRefernece = () => {
  const userLogged = sessionStorage.getItem("username");
  const logInText = "Zaloguj się";
  const { setWhosProfileToDisplay } = useContext(TweetsContext);

  return (
    <>
      {userLogged ? (
        <Link to='/Profile' onClick={() => setWhosProfileToDisplay(userLogged)}>
          <div className='profile-ref'>
            <img src={logo} className='profile-ref__picture'></img>
            <h1 className='profile-ref__username'> {userLogged} </h1>
          </div>
        </Link>
      ) : (
        <Link to='/SignIn'>
          <div className='profile-ref'>
            <h1 className='profile-ref__username'> {logInText} </h1>
          </div>
        </Link>
      )}
    </>
  );
};

export default ProfileRefernece;
