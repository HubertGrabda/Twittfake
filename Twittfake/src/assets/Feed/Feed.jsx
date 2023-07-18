import "./Feed.scss";
import "../../../mocks/loremIpsumSampleText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faEdit,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";

const Feed = () => {
  const userName = "@Twittfake_Dev";
  const icons = [faHeart, faComment, faEdit, faRetweet];

  return (
    <section>
      <article>
        <div className='tweet'>
          <h1 className='tweet_username'> {userName} </h1>
          <p className='tweet_content'>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            dignissim felis lorem, vitae facilisis risus mattis id. Donec
            blandit felis sed lorem iaculis tincidunt. Maecenas viverra, erat
            non rutrum leo.{" "}
          </p>
          <div className='tweet_reactions'>
            {icons.map((icon, index) => (
              <FontAwesomeIcon
                icon={icon}
                key={index}
                className='tweet_reactions__icon'
              />
            ))}
          </div>
        </div>
      </article>
      <article>
        <div className='tweet'>
          <h1 className='tweet_username'> {userName} </h1>
          <p className='tweet_content'>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            dignissim felis lorem, vitae facilisis risus mattis id. Donec
            blandit felis sed lorem iaculis tincidunt. Maecenas viverra, erat
            non rutrum leo.{" "}
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
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            dignissim felis lorem, vitae facilisis risus mattis id. Donec
            blandit felis sed lorem iaculis tincidunt. Maecenas viverra, erat
            non rutrum leo.{" "}
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
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            dignissim felis lorem, vitae facilisis risus mattis id. Donec
            blandit felis sed lorem iaculis tincidunt. Maecenas viverra, erat
            non rutrum leo.{" "}
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
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            dignissim felis lorem, vitae facilisis risus mattis id. Donec non
            rutrum leo.{" "}
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
