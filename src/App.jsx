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
  homePageRoute,
  profileRoute,
  searchRoute,
  signInRoute,
  searchResultRoute,
} from "./const/routing";

const App = () => (
  <TweetsProvider>
    <ThemeProvider>
      <Routes>
        <Route exact path={homePageRoute} element={<Home />}></Route>
        <Route path={profileRoute} element={<Profile />}></Route>
        <Route path={searchRoute} element={<Search />}></Route>
        <Route path={createTweetRoute} element={<CreateTweet />}></Route>
        <Route path={signInRoute} element={<SignInPageContainer />}></Route>
        <Route path={searchResultRoute} element={<SearchResult />}></Route>
      </Routes>
    </ThemeProvider>
  </TweetsProvider>
);

export default App;
