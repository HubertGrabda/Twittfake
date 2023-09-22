import "./FollowCount.scss";

const FollowCount = () => (
  <div className='follow-counter'>
    <span className='follow-counter__count'>
      <span className='follow-counter__count__bold--font'>140</span>
      Obserwujących
    </span>
    <span className='follow-counter__count'>
      <span className='follow-counter__count__bold--font'>256</span>
      Obserwujesz
    </span>
  </div>
);

export default FollowCount;
