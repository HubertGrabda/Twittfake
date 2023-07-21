import "./NewTweetView.scss";

const NewTweetView = () => {
  return (
    <>
      <div className='textarea'>
        <textarea
          className='textarea__input'
          placeholder='O czym myślisz?'
        ></textarea>
        <button className='textarea__submit-button'>Wyślij</button>
      </div>
    </>
  );
};

export default NewTweetView;
