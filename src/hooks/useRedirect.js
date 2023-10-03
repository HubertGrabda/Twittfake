import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (document.body.clientWidth >= 1024) {
        navigate("/");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navigate]);
};

export default useRedirect;
