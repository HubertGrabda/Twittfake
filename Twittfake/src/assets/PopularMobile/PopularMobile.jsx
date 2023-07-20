import "./PopularMobile.scss";

const PopularMobile = () => {
  return (
    <div className='popularMobile'>
      <section>
        <div className='popularMobile__tile'>
          <span className='popularMobile__tile__category'>
            Najpopularniejsze w Polsce
          </span>
          <span className='popularMobile__tile__catch-phrase'>#studia2023</span>
          <span className='popularMobile__tile__amount-of-tweets'>
            Tweety: 1 274
          </span>
        </div>
      </section>
    </div>
  );
};

export default PopularMobile;
