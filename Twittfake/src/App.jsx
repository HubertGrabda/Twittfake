import "./App.scss";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";

const App = () => (
  <div className='app-container'>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Profile' element={<Profile />}></Route>
    </Routes>
  </div>
);

export default App;
