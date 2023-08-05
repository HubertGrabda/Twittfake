import "./PopularMobile.scss";
import TrendingTags from "../../../mocks/TrendingTags.json";

const PopularMobile = () => {
  return (
    <div className='popularMobile'>
      {TrendingTags.trendingHashtags.map(({ id, tag, count, category }) => (
        <section key={id}>
          <div className='popularMobile__tile'>
            <span className='popularMobile__tile__category'>{category}</span>
            <span className='popularMobile__tile__catch-phrase'> {tag} </span>
            <span className='popularMobile__tile__amount-of-tweets'>
              Tweety: {count}
            </span>
          </div>
        </section>
      ))}
    </div>
  );
};

export default PopularMobile;
