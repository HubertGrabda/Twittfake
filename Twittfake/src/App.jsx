import "./App.scss";
import CreateNewTweet from "./pages/CreateNewTweet";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import { Route, Routes } from "react-router-dom";

const App = () => (
  <div className='app-container'>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Profile' element={<Profile />}></Route>
      <Route path='/Search' element={<Search />}></Route>
      <Route path='/CreateTweet' element={<CreateNewTweet />}></Route>
    </Routes>
  </div>
);

export default App;
