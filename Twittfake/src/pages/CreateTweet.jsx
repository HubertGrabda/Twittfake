import Header from       "../components/Header/Header";
import HomeButton from   "../components/HomeButton/HomeButton";
import Navbar from       "../components/Navbar/Navbar";
import NewTweetView from "../components/NewTweetView/NewTweetView";

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
