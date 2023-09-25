import "./ProfileView.scss";
import logo from "../../images/TwittfakeLogoAlt.png";
import FollowCount from "../FollowCount/FollowCount";
import { useTweetContext } from "../../hooks/useTweetContext";

const ProfileView = () => {
  const { profileToDisplay } = useTweetContext();

  return (
    <>
      <div className='profile-wrapper'>
        <img src={logo} className='profile-wrapper__picture'></img>
        <p className='profile-wrapper__username'> {profileToDisplay} </p>
        <FollowCount />
        <div className='profile-wrapper__feed'></div>
        <p className='profile-wrapper__feed__user-tweets-text'>
          Tweety użytkownika
        </p>
      </div>
    </>
  );
};

export default ProfileView;
