import { useContext, useEffect } from "react";
import { TweetsContext } from "../context/Tweet'sState";

const useResetFilter = () => {
  const { setFilteredItems, tweets, setTileIsClicked } =
    useContext(TweetsContext);

  useEffect(() => {
    setFilteredItems(tweets);
    setTileIsClicked(false);
  }, [0]);
};

export default useResetFilter;