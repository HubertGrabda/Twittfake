import { useContext, useEffect } from "react";
import { TweetsContext } from "../context/Tweet'sState";

const useResetFilter = () => {
  const { setFilteredItems, tweets } = useContext(TweetsContext);
  useEffect(() => {
    return setFilteredItems(tweets);
  });
};

export default useResetFilter;
