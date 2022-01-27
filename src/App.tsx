import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateTimetable from './pages/CreateTimetable';
import JoinTimetable from './pages/JoinTimetable';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Timetable from './pages/Timetable';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CreateTimetable />} />
      <Route path="/join/:timetableId" element={<JoinTimetable />} />
      <Route path="/timetable/:timetableId" element={<Timetable />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);

export default App;
