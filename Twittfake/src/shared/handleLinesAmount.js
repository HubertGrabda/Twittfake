const handleLinesAmount = (e) => {
  const maxLines = 2;
  const lines = e.target.value.split("\n").length;
  if (lines >= maxLines && e.key === "Enter") {
    e.preventDefault();
  }
};

export default handleLinesAmount;
