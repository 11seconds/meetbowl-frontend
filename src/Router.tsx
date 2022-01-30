import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { getAccessToken, isTokenExisting, isTokenValid } from 'utils/token';

import CreateTimetable from 'pages/CreateTimetable';
import JoinTimetable from 'pages/JoinTimetable';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Timetable from 'pages/Timetable';
import Authorization from 'pages/Authorization';

type PrivateRouteProps = {
  children: JSX.Element;
};

const AuthRequired = ({ children }: PrivateRouteProps): JSX.Element => {
  const jwt = getAccessToken();

  if (!isTokenExisting() || isTokenValid(jwt)) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CreateTimetable />} />
      <Route path="/join/:timetableId" element={<JoinTimetable />} />
      <Route path="/timetable/:timetableId" element={<Timetable />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/authorization" element={<Authorization />} />

      {/* Protected Route */}
      <Route
        path="/auth-required"
        element={
          <AuthRequired>
            <div>helloM</div>
          </AuthRequired>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default Router;
