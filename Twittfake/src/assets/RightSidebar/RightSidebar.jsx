import "./RightSidebar.scss";
import Popular from "../Popular/Popular";
import Searchbar from "../Searchbar/Searchbar";

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
