import "./ProfileView.scss";
import logo from "../../images/TwittfakeLogoAlt.png";
import FollowCount from "../FollowCount/FollowCount";
import PropTypes from "prop-types";
import { useTweetContext } from "../../hooks/useTweetContext";


const ProfileView = () => {
  const { profileToDisplay } = useTweetContext();
  const username = profileToDisplay;

  return (
    <>
      <div className='profile-wrapper'>
        <img src={logo} className='profile-wrapper__picture'></img>
        <p className='profile-wrapper__username'> {username} </p>
        <FollowCount />
        <div className='profile-wrapper__feed'></div>
        <p className='profile-wrapper__feed__user-tweets'>
          Tweety użytkownika
        </p>
      </div>
    </>
  );
};

ProfileView.propTypes = {
  username: PropTypes.string.isRequired,
};

export default ProfileView;
