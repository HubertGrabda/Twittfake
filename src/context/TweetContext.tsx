import { createContext, useState, PropsWithChildren } from "react";
import TweetsData from "../../mocks/MockTweets.json";
import AccountService from "../services/AccountService";

type TweetsContextTypes = PropsWithChildren<{
  userLogged: string | boolean;
}>;

const TweetsContext = createContext<TweetsContextTypes | null>(null);


const TweetsProvider = ({ children }: TweetsContextTypes) => {
  const { getUsername } = AccountService();
  const userLogged = getUsername();
  const [tweets, setTweets] = useState(TweetsData.tweets);
  const [filteredTweetsData, setFilteredTweetsData] = useState(tweets);
  const [profileToDisplay, setProfileToDisplay] = useState(userLogged);
  const [isTagClicked, setIsTagClicked] = useState(false);

  const tweetContextValue = {
    userLogged,
    tweets,
    setTweets,
    isTagClicked,
    setIsTagClicked,
    filteredTweetsData,
    setFilteredTweetsData,
    profileToDisplay,
    setProfileToDisplay,
  };

  return (
    <TweetsContext.Provider value={tweetContextValue}>
      {children}
    </TweetsContext.Provider>
  );
};

export { TweetsContext, TweetsProvider };
