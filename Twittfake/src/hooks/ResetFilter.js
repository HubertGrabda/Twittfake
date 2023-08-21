import { useContext } from "react";
import { TweetsContext } from "../context/Tweet'sState";

const useResetFilter = () => {
  const { setFilteredItems, tweets } = useContext(TweetsContext);
  return setFilteredItems(tweets);
};

export default useResetFilter;
