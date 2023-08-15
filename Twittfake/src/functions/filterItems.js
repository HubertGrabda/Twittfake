const filterItems = (data, inputValue, setResultState) => {
  const filteredResults = data.filter((item) =>
    item.content.toLowerCase().includes(inputValue.toLowerCase())
  );

  setResultState(filteredResults);
};

export default filterItems;
