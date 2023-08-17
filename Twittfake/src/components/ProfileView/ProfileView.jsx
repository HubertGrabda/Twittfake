import "./ProfileView.scss";
import logo from "../../images/TwittfakeLogoAlt.png";
import FollowCount from "../FollowCount/FollowCount";

const ProfileView = () => {
  const loggedUsername = sessionStorage.getItem("username");
  return (
    <>
      <div className='profile-wrapper'>
        <img src={logo} className='profile-wrapper__picture'></img>
        <h1 className='profile-wrapper__username'> {loggedUsername} </h1>
        <FollowCount />
        <div className='profile-wrapper__feed'></div>
        <h1 className='profile-wrapper__feed__user-tweets'>
          Tweety użytkownika
        </h1>
      </div>
    </>
  );
};

export default ProfileView;
