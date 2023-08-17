const handleLinesAmount = (e) => {
  const MAX_LINES = 2;
  const lines = e.target.value.split("\n").length;
  if (lines >= MAX_LINES && e.key === "Enter") {
    e.preventDefault();
  }
};

export default handleLinesAmount;
