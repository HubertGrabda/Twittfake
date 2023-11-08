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
  homePageRoute,
} from "./const/routing";

const App = () => (
  <TweetsProvider>
    <ThemeProvider>
      <Routes>
        <Route exact path={homePageRoute} element={<Home />}></Route>
        <Route exact path={profileRoute} element={<Profile />}></Route>
        <Route exact path={searchRoute} element={<Search />}></Route>
        <Route exact path={createTweetRoute} element={<CreateTweet />}></Route>
        <Route exact path={signInRoute} element={<SignInPageContainer />}></Route>
        <Route exact path={searchResultRoute} element={<SearchResult />}></Route>
      </Routes>
    </ThemeProvider>
  </TweetsProvider>
);

export default App;
