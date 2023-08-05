import "./ProfileView.scss";
import logo from "../images/twittfake.png";
import FollowCount from "../FollowCount/FollowCount";

const ProfileView = () => {
  return (
    <>
      <div className='profile-wrapper'>
        <img src={logo} className='profile-wrapper__picture'></img>
        <h1 className='profile-wrapper__username'>Twittfake_Dev</h1>
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
