const toggleState = (setterName, updaterFunc, id) => {
  setterName((prevState) => ({
    ...prevState,
    [id]: updaterFunc(prevState[id]),
  }));
};

export default toggleState;
