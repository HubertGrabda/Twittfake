import "./CreateTweetArea.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";

const CreateTweetArea = () => {
  return (
    <section>
      <div className='textarea'>
        <h1 className='textarea--active__header '> Utwórz tweet </h1>
        <textarea
          className='textarea--active__textarea'
          placeholder='O czym myślisz?'
          maxLength={210}
        ></textarea>
        <button className='textarea--active__sumbit_button'> Tweetnij </button>
      </div>
      <button className='textarea--active__call_button'>
        <FontAwesomeIcon icon={faFeather} />
      </button>
    </section>
  );
};

export default CreateTweetArea;
