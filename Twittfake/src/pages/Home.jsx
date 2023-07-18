import Feed from "../assets/Feed/Feed";
import Header from "../assets/Header/Header";
import Navbar from "../assets/Navbar/Navbar";
import RightSidebar from "../assets/RightSidebar/RightSidebar";

const Home = () => {
  return (
    <>
      <Header name={"Główna"} />
      <Feed />
      <Navbar />
      <RightSidebar />
    </>
  );
};

export default Home;
