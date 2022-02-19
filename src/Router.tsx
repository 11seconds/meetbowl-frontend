import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { getAccessToken, isTokenExisting, isTokenValid } from 'utils/token';
import useRedirect from 'hooks/useRedirect';

import CreateTimetable from 'pages/CreateTimetable';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Timetable from 'pages/Timetable';
import Authorization from 'pages/Authorization';

type CustomRouteProps = {
  children: JSX.Element;
};

const AuthRequired = ({ children }: CustomRouteProps): JSX.Element => {
  const { pushRedirect } = useRedirect();
  const jwt = getAccessToken();

  if (!isTokenExisting() || !isTokenValid(jwt)) {
    pushRedirect();
    return <Navigate to="/sign-in" />;
    // 강제로 이동 (redirect 추가) -> authorization or signup 에서 리다이렉트 시켜주고 redirect 없앰
  }

  return children;
};

const UnauthRequired = ({ children }: CustomRouteProps): JSX.Element => {
  const jwt = getAccessToken();

  if (isTokenExisting() && isTokenValid(jwt)) {
    return <Navigate to="/" />;
  }

  return children;
};

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/authorization" element={<Authorization />} />

      <Route
        path="/sign-in"
        element={
          <UnauthRequired>
            <SignIn />
          </UnauthRequired>
        }
      />

      {/* Protected Route */}
      <Route
        path="/"
        element={
          <AuthRequired>
            <CreateTimetable />
          </AuthRequired>
        }
      />

      <Route
        path="/timetable/:timetableId"
        element={
          <AuthRequired>
            <Timetable />
          </AuthRequired>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default Router;
