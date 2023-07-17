import "./Popular.scss";

const Popular = () => {
  return (
    <div className='popular'>
      <section>
        <div className='popular__tile'>
          <span className='popular__tile__category'>
            Najpopularniejsze w Polsce
          </span>
          <span className='popular__tile__catch-phrase'> #studia2023 </span>
          <span className='popular__tile__amount-of-tweets'>Tweety: 1 274</span>
        </div>
      </section>
    </div>
  );
};

export default Popular;
