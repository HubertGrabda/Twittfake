const updateStateByKey = (updaterFunc, id) => {
  return (prevState) => ({
    ...prevState,
    [id]: updaterFunc(prevState[id]),
  });
};

export default updateStateByKey;

