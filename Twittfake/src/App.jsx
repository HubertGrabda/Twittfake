import "./App.scss";
import SingInPageView from "./components/SingInPageView/SingInPageView";
import { TweetsProvider } from "./context/Tweet'sState";
import CreateTweet from "./pages/CreateTweet";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import { Route, Routes } from "react-router-dom";
import SearchResult from "./pages/SearchResult";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => (
  <TweetsProvider>
    <ThemeProvider>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
        <Route path='/Search' element={<Search />}></Route>
        <Route path='/CreateTweet' element={<CreateTweet />}></Route>
        <Route path='/SignIn' element={<SingInPageView />}></Route>
        <Route path='SearchResult' element={<SearchResult />}></Route>
      </Routes>
    </ThemeProvider>
  </TweetsProvider>
);

export default App;
