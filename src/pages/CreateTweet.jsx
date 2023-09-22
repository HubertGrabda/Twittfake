import Header from "../components/Header/Header";
import HomeButton from "../components/HomeButton/HomeButton";
import Navbar from "../components/Navbar/Navbar";
import NewTweetPageContainer from "../components/NewTweetPage/NewTweetPageContainer";

const CreateNewTweet = () => (
  <>
    <Header pageTitle='Nowy tweet' />
    <HomeButton />
    <Navbar />
    <NewTweetPageContainer />
  </>
);

export default CreateNewTweet;
