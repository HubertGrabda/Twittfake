import "./App.scss";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import MainContent from "./MainContent/MainContent";
import RightSidebar from "./RightSidebar/RightSidebar";

const App = () => (
  <div className='app-container'>
    <LeftSidebar />
    <MainContent />
    <RightSidebar />
  </div>
);

export default App;
