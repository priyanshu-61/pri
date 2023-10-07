
import './App.css';
import Header from './components/Header/Header';
import Footer from "./components/Footer";
import TeacherCard from "./pages/home/TeacherCard"
import LandingPage from "./pages/home/Landing"
import Login from "./pages/Login/Login"
import SingUp from "./pages/Register/Signup"
// import Dashboard from "./pages/Dashboard/Dashboard"
// import Landing from './home/Landing';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import TestPage from './pages/test/test';
import PrivateRoute from './components/Routes/Private';
import ForgetPassword from './pages/Login/ForgetPassword';
import ConfirmPassword from './pages/Login/ConfirmPassword';
import DashBoard from './pages/user/Course/Dashboard/Dashboard';
import Mycourse from './pages/user/Course/Mycourse/Mycourse';
import Purchase from './pages/user/Course/Purchase/Purchase';
import Profile from './pages/user/Course/Profile/Profile';
import Profileupdate from './pages/user/Course/Profile/Profileupdate';
import PurchaseByCategory from './pages/user/Course/Purchase/PurchaseByCategory';
import Curriculum from './pages/user/Course/Curriculum/Curriculum';
import ByCourse from './pages/ByCourse/ByCourse';
import MainadminDashboard from './pages/admin/admin/dashboard/MainadminDashboard';
import AllCourse from "./pages/home/AllCourse"
import { useAuth } from "./context/auth";
import AdminDashboard from "./pages/admin/admin/dashboard/AdminDashboard"
import Course from "./pages/admin/admin/courses/Course"
import VideoModel from './pages/user/Course/VideoModel/MycourseVideo';
import Contact_us from './components/ContactUs';
import AboutUs from './components/AboutUs';

// import Profileupdate from './pages/user/Course/Profile/Profileupdate';

// import { useDispatch } from "react-redux";




const Routing = () => {
  const [auth, setAuth] = useAuth();

  // const history = useNavigate();
  // const dispatch = useDispatch();
  // const user = "admin";
  // console.log(user)
  return (
    <Routes>
      
      <Route path="/" element={<LandingPage />}>  </Route>
      <Route path="/library" element={<TeacherCard />}>  </Route>
      <Route path="/login" element={<Login />}>  </Route>
      <Route path="/ForgetPassword" element={<ForgetPassword />}>  </Route>
      <Route path="/ConfirmPassword/:token" element={<ConfirmPassword />}>  </Route>
      <Route path="/SignUp" element={<SingUp />}>  </Route>
      <Route path="/TestPage" element={<TestPage />}>  </Route>
      <Route path="/dashboard/*" element={<PrivateRoute />}>
        <Route path="" element={<DashBoard />} />
        <Route path="Mycourse" element={<Mycourse />} />
        <Route path='Mycourse/64896cd8e73ed001b9447aa8/VideoModel' element={<VideoModel />} />
        <Route path="Purchase" element={<Purchase />} />
        <Route path="category" element={<PurchaseByCategory />} />
        <Route path="all_course" element={<PurchaseByCategory />} />
        <Route path="Profile" element={<Profile />} />
      </Route>
      <Route path="/admin/dashboard/*" element={<MainadminDashboard />} />

      <Route path="/ProfileUpdate" element={<Profileupdate />} />
      <Route path="/dashboard/Purchase/:id" element={<Curriculum />} />
      <Route path="/dashboard/Purchase/ByCourse/:id" element={<ByCourse />} />
      <Route path="/dashboard/Purchase/Profile" element={<Profile />} />
      <Route path="/all_course" element={<AllCourse />} />
      <Route path="/contact_us" element={<Contact_us />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      {/* <Route path="/category" element={<TestPage />} /> */}

      {/*
      <Route path="/ucam" element={<Ucam />}>  </Route>
      <Route path="/teacher-dashboard" element={<TeacherDashboard />}>  </Route>
      <Route path="/admin-dashboard" element={<AdminDashboard />}>  </Route>
      <Route path="/admin/course-info" element={<AdminCourseInfo />}>  </Route>
      <Route path="/admin/student-info" element={<StudentInfo />}>  </Route>
      <Route path="/admin/teacher-info" element={<TeacherInfo />}>  </Route>
      <Route path="/messages" element={<Messages />}>  </Route>
      <Route path="/profile" element={<Profile />}>  </Route>
      <Route path="/settings" element={<Settings />}>  </Route>
      <Route path="/grades" element={<Grades />}>  </Route>
      <Route path="/login" element={<Login />}>  </Route>
      <Route path="/register" element={<Register />}>  </Route>
      <Route path="/all-courses" element={<AllCourses />}>  </Route>
      <Route path="/course/:courseId" element={<CourseInfo />}>  </Route>
      <Route path="*" element={<NotFound />}>  </Route> */}
      {/* ADMIN--------------------------------------------------- */}
      <Route path="/admin" element={<MainadminDashboard />}>  </Route>

    </Routes>
  );
};


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routing />
      </Router>
    </div>
  );
}

export default App;
