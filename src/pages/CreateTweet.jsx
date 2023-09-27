import Header from "../components/Header/Header";
import HomeButton from "../components/HomeButton/HomeButton";
import Navbar from "../components/Navbar/Navbar";
import AddTweetPageContainer from "../components/AddTweetPage/AddTweetPageContainer";

const CreateNewTweet = () => (
  <>
    <Header pageTitle='Nowy tweet' />
    <HomeButton />
    <Navbar />
    <AddTweetPageContainer />
  </>
);

export default CreateNewTweet;
