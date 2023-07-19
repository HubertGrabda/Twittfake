import "./ProfileView.scss";
import logo from "../images/twittfake.png";

const ProfileView = () => {
  return (
    <>
      <div className='profile-wrapper'>
        <img src={logo} className='profile-wrapper__picture'></img>
        <h1 className='profile-wrapper__username'>@Twittfake_Dev</h1>
        <div className='profile-wrapper__follow-counter'>
          <span className='profile-wrapper__follow-counter__count'>
            <span className='profile-wrapper__follow-counter__count__bold--font'>
              140
            </span>
            Obserwujących
          </span>
          <span className='profile-wrapper__follow-counter__count'>
            <span className='profile-wrapper__follow-counter__count__bold--font'>
              256
            </span>
            Obserwujesz
          </span>
        </div>
        <div className='profile-wrapper__feed'></div>
        <h1 className='profile-wrapper__feed__user-tweets'>
          {" "}
          Tweety użytkownika{" "}
        </h1>
      </div>
    </>
  );
};

export default ProfileView;
