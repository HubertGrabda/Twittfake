import { useEffect } from "react";
import { useTweetContext } from "./useTweetContext";

const useResetFilter = () => {
  const { setFilteredTweetsData, tweets, setIsTagClicked } = useTweetContext();

  useEffect(() => {
    setFilteredTweetsData(tweets);
    setIsTagClicked(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useResetFilter;
