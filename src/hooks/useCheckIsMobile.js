const useCheckIsMobile = () => {
  const isMobile = document.body.clientWidth <= 1024 ? true : false;
  return isMobile;
};

export default useCheckIsMobile;
