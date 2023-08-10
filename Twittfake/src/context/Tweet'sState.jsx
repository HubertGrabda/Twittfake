import { createContext, useState } from "react";
import TweetsData from "../../mocks/MockTweets.json";

const TweetsContext = createContext();

// eslint-disable-next-line react/prop-types
const TweetsProvider = ({ children }) => {
  const [tweets, setTweets] = useState(TweetsData.tweets);
  const userLogged = localStorage.getItem("username");
  const inputPlaceholder = `O czym myślisz${
    userLogged ? `, ${userLogged}` : ""
  }?`;

  return (
    <TweetsContext.Provider
      value={{ tweets, setTweets, userLogged, inputPlaceholder }}
    >
      {children}
    </TweetsContext.Provider>
  );
};

export { TweetsContext, TweetsProvider };
