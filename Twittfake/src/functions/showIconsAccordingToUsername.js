const showIconsAccordingToUsername = (
  username,
  userLogged,
  arrayName,
  sliceRange
) => (username === userLogged ? arrayName : arrayName.slice(0, sliceRange));

export default showIconsAccordingToUsername;
