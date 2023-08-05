import "./Popular.scss";
import TrendingTags from "../../../mocks/TrendingTags.json";

const Popular = () => {
  return (
    <div className='popular'>
      {TrendingTags.trendingHashtags.map(({ id, tag, count, category }) => (
        <section key={id}>
          <div className='popular__tile'>
            <span className='popular__tile__category'> {category} </span>
            <span className='popular__tile__catch-phrase'> {tag} </span>
            <span className='popular__tile__amount-of-tweets'>
              Tweety: {count}
            </span>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Popular;
