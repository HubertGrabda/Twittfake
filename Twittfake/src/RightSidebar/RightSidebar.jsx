import "./RightSidebar.scss";
import Popular from "./components/Popular/Popular";
import Searchbar from "./components/Searchbar/Searchbar";

const RightSidebar = () => {
  return (
    <>
      <div className='right-sidebar'>
        <Searchbar />
        <Popular />
      </div>
    </>
  );
};

export default RightSidebar;
