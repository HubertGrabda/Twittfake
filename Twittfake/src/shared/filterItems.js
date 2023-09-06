const filterItems = (data, inputValue, setResultState, setTagIsClicked) => {
  const filteredResults = data.filter((item) =>
    item.content.toLowerCase().includes(inputValue.toLowerCase())
  );

  setTagIsClicked(true);
  setResultState(filteredResults);
};

export default filterItems;
