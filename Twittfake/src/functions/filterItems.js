const filterItems = (data, inputValue, setResultState, setTileIsClicked) => {
  const filteredResults = data.filter((item) =>
    item.content.toLowerCase().includes(inputValue.toLowerCase())
  );

  setTileIsClicked(true);
  setResultState(filteredResults);
};

export default filterItems;
