import { useNavigate, useLocation } from 'react-router-dom';

const REDIRECT_PATH_KEY = 'redirectPath';

const useRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pushRedirect = () => {
    localStorage.setItem(REDIRECT_PATH_KEY, location.pathname);
  };

  const popRedirect = () => {
    const redirectPath = localStorage.getItem(REDIRECT_PATH_KEY);
    if (redirectPath) {
      localStorage.removeItem(REDIRECT_PATH_KEY);
      navigate(redirectPath);
    } else {
      navigate('/');
    }
  };

  return { pushRedirect, popRedirect };
};

export default useRedirect;
