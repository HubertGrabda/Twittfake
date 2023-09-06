import "./ProfileView.scss";
import logo from "../../images/TwittfakeLogoAlt.png";
import FollowCount from "../FollowCount/FollowCount";
import PropTypes from "prop-types";
import { useContext } from "react";
import { TweetsContext } from "../../context/TweetContext";

const ProfileView = ({ username }) => {
  const { profileToDisplay } = useTweetContext();
  username = profileToDisplay;

  return (
    <>
      <div className='profile-wrapper'>
        <img src={logo} className='profile-wrapper__picture'></img>
        <h1 className='profile-wrapper__username'> {username} </h1>
        <FollowCount />
        <div className='profile-wrapper__feed'></div>
        <h1 className='profile-wrapper__feed__user-tweets'>
          Tweety użytkownika
        </h1>
      </div>
    </>
  );
};

ProfileView.propTypes = {
  username: PropTypes.string.isRequired,
};

export default ProfileView;
