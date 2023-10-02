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

const App = () => (
  <TweetsProvider>
    <ThemeProvider>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
        <Route path='/Search' element={<Search />}></Route>
        <Route path='/CreateTweet' element={<CreateTweet />}></Route>
        <Route path='/SignIn' element={<SignInPageContainer />}></Route>
        <Route path='SearchResult' element={<SearchResult />}></Route>
      </Routes>
    </ThemeProvider>
  </TweetsProvider>
);

export default App;
