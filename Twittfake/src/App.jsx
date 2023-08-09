import "./App.scss";
import { TweetsProvider } from "./context/Tweet'sState";
import CreateTweet from "./pages/CreateTweet";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/signUp";

const App = () => (
  <TweetsProvider>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Profile' element={<Profile />}></Route>
      <Route path='/Search' element={<Search />}></Route>
      <Route path='/CreateTweet' element={<CreateTweet />}></Route>
      <Route path='/SignIn' element={<SignIn />}></Route>
      <Route path='/SignUp' element={<SignUp />}></Route>
    </Routes>
  </TweetsProvider>
);

export default App;
