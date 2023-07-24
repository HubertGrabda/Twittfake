import "./AddTweetArea.scss";

export const AddTweetArea = () => {
  const inputPlaceholder = "O czym myślisz?";
  const buttonValue = "Prześlij";

  return (
    <div className='textarea-wrapper'>
      <textarea
        className='textarea-wrapper__input'
        placeholder={inputPlaceholder}
      ></textarea>
      <button className='textarea-wrapper__submit-button'>{buttonValue}</button>
    </div>
  );
};
