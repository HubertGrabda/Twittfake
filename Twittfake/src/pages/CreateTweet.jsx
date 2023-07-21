import Header from "../assets/Header/Header";
import HomeButton from "../assets/HomeButton/HomeButton";
import Navbar from "../assets/Navbar/Navbar";
import NewTweetView from "../assets/NewTweetView/NewTweetView";

const CreateNewTweet = () => {
  return (
    <>
      <Header name='Nowy tweet' />
      <HomeButton />
      <Navbar />
      <NewTweetView />
    </>
  );
};

export default CreateNewTweet;
