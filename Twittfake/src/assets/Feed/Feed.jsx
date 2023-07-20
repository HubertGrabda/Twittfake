import "./Feed.scss";
import "../../../mocks/loremIpsumSampleText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faEdit,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import SampleText from "../../../mocks/loremIpsumSampleText";

const Feed = () => {
  const userName = "@Twittfake_Dev";
  const icons = [faHeart, faComment, faEdit, faRetweet];

  const iconClickHandlers = [
    () => console.log("Heart icon clicked"),
    () => console.log("Comment icon clicked"),
    () => console.log("Edit icon clicked"),
    () => console.log("Retweet icon clicked"),
  ];

  return (
    <section>
      <article>
        <div className='tweet'>
          <h1 className='tweet_username'> {userName} </h1>
          <p className='tweet_content'>
            <SampleText />
          </p>
          <div className='tweet_reactions'>
            {icons.map((icon, index) => (
              <FontAwesomeIcon
                icon={icon}
                key={index}
                className='tweet_reactions__icon'
                onClick={iconClickHandlers[index]}
              />
            ))}
          </div>
        </div>
      </article>
      <article>
        <div className='tweet'>
          <h1 className='tweet_username'> {userName} </h1>
          <p className='tweet_content'>
            <SampleText />
          </p>
          <div className='tweet_reactions'>
            {icons.map((icon, index) => (
              <FontAwesomeIcon icon={icon} key={index} />
            ))}
          </div>
        </div>
      </article>
      <article>
        <div className='tweet'>
          <h1 className='tweet_username'> {userName} </h1>
          <p className='tweet_content'>
            <SampleText />
          </p>
          <div className='tweet_reactions'>
            {icons.map((icon, index) => (
              <FontAwesomeIcon icon={icon} key={index} />
            ))}
          </div>
        </div>
      </article>
      <article>
        <div className='tweet'>
          <h1 className='tweet_username'> {userName} </h1>
          <p className='tweet_content'>
            <SampleText />
          </p>
          <div className='tweet_reactions'>
            {icons.map((icon, index) => (
              <FontAwesomeIcon icon={icon} key={index} />
            ))}
          </div>
        </div>
      </article>
      <article>
        <div className='tweet'>
          <h1 className='tweet_username'> {userName} </h1>
          <p className='tweet_content'>
            <SampleText />
          </p>
          <div className='tweet_reactions'>
            {icons.map((icon, index) => (
              <FontAwesomeIcon icon={icon} key={index} />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Feed;
