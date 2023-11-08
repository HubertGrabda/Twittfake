import "./App.scss";
import { TweetsProvider } from "./context/TweetContext";
import CreateTweet from "./pages/CreateTweet";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import { Route, Routes } from "react-router-dom";
import SearchResult from "./pages/SearchResult";
import { ThemeProvider } from "./context/ThemeContext";
import SignInPageContainer from "./components/SignInPage/SignInPageContainer";
import {
  createTweetRoute,
  profileRoute,
  searchRoute,
  signInRoute,
  searchResultRoute,
} from "./const/routing";

const App = () => (
  <TweetsProvider>
    <ThemeProvider>
      <Routes>
        <Route exact path="/Twittfake" element={<Home />}></Route>
        <Route path={`/Twittfake/${profileRoute}`} element={<Profile />}></Route>
        <Route path={`/Twittfake/${searchRoute}`} element={<Search />}></Route>
        <Route path={`/Twittfake/${createTweetRoute}`} element={<CreateTweet />}></Route>
        <Route path={`/Twittfake/${signInRoute}`} element={<SignInPageContainer />}></Route>
        <Route path={`/Twittfake/${searchResultRoute}`} element={<SearchResult />}></Route>
      </Routes>
    </ThemeProvider>
  </TweetsProvider>
);

export default App;
