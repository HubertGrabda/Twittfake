import "./MainContent.scss";

import SampleText from "../assets/mocks/loremIpsumSampleText";
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";

const MainContent = () => {
  return (
    <main>
      <div className='main'>
        <Header />
        <Feed />
        <SampleText />
      </div>
    </main>
  );
};

export default MainContent;
