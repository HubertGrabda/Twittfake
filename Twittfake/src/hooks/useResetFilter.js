import { useContext, useEffect } from "react";
import { TweetsContext } from "../context/Tweet'sState";

const useResetFilter = () => {
  const { setFilteredTweetsData, tweets, setTileIsClicked } =
    useContext(TweetsContext);

  useEffect(() => {
    setFilteredTweetsData(tweets);
    setTileIsClicked(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useResetFilter;
