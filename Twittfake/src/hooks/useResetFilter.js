import { useEffect } from "react";
import { useTweetContext } from "./useTweetContext";

const useResetFilter = () => {
  const { setFilteredTweetsData, tweets, setTagIsClicked } = useTweetContext();

  useEffect(() => {
    setFilteredTweetsData(tweets);
    setTagIsClicked(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useResetFilter;
