import { useEffect } from "react";
import { useTweetContext } from "./useTweetContext";

const useResetFilter = () => {
  const { setFilteredTweetsData, tweets, setIsTagClicked } = useTweetContext();

  useEffect(() => {
    setFilteredTweetsData(tweets);
    setIsTagClicked(false);

  }, [setIsTagClicked, tweets, setFilteredTweetsData]);
};

export default useResetFilter;
