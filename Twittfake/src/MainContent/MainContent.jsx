import "./MainContent.scss";

import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";

const MainContent = () => {
  return (
    <main>
      <div className='main'>
        <Header />
        <Feed />
        <Navbar />
      </div>
    </main>
  );
};

export default MainContent;
