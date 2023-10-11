import { FOLLOWED, FOLLOWERS } from "../../const/input";
import "./FollowCount.scss";

const FollowCount = () => (
  <div className='follow-counter'>
    <span className='follow-counter__count'>
      <span className='follow-counter__count__bold--font'> {FOLLOWERS}</span>
      Obserwujących
    </span>
    <span className='follow-counter__count'>
      <span className='follow-counter__count__bold--font'>{FOLLOWED}</span>
      Obserwujesz
    </span>
  </div>
);

export default FollowCount;
