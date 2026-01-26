
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import ReactDOM from 'react-dom/client';
import React from 'react';
import AdminLayout from '../src/Layout/AdminLayout'
import AdminHome from '../src/Layout/AdminHome1'
import ProgramList from './Pages/admin/program/ProgramList';
import ProgramForm from './Pages/admin/program/ProgramForm';
import ProgramDetails from './Pages/admin/program/ProgramDetails';
import StudentDetails from './Pages/admin/students/StudentDetails';
import StudentList from './Pages/admin/students/StudentList';
import StudentAdd from './Pages/admin/students/StudentAdd';
import BatchList from './Pages/admin/batches/batchs';
import MCQExamList from './Pages/admin/exam/MCQExamList';
import Profile from './Pages/admin/profile/Profile';
import Teacher from './Pages/admin/teachers/Teacher';
// import NavBar from './Layout/NavBar';
import UserDashboard from './Pages/User/profile/UserDashboard';
import CouponList from './Pages/admin/cupon/CouponList';
import CouponAdd from './Pages/admin/cupon/CouponAdd';
import CouponDetails from './Pages/admin/cupon/CouponDetails';
import SubjectList from './Pages/admin/subjects/SubjectList';
import Settings from './Pages/admin/settings/Settings';
import Home from './components/Home/Home';
import TrueFalse from './Pages/User/examSection/TrueFalse/TrueFalse';
import CourseBatchSingleCard from './Pages/User/course/allCourse/CourseBatchSingleCard';
import MCQ from './Pages/User/course/myCourse/MCQ/MCQ';

const router = createBrowserRouter([
  {
      path:'/',     
      // <NavBar></NavBar>,
      element:<AdminLayout></AdminLayout>,
      children:[
        {
          path:'/',
          element:<AdminHome></AdminHome>
        },
        {
          path:'/programs',
          element:<ProgramList></ProgramList>
        },
        {
          path:'/programs/new',
          element:<ProgramForm></ProgramForm>
        },
        {
          path:'/programs/edit/:id',
          element:<ProgramForm></ProgramForm>
        },
        {
          path:'/programs/:id',
          element:<ProgramDetails></ProgramDetails>
        },
        {
          path:'/batches',
          element:<BatchList></BatchList>
        },
        {
          path:'/mcq-exams',
          element:<MCQExamList></MCQExamList>
        },
        {
          path:'/student-details',
          element:<StudentDetails></StudentDetails>
        },
        {
          path:'/student-deatails',
          element:<StudentList></StudentList>
        },
        {
          path:'/student-add',
          element:<StudentAdd></StudentAdd>
        },
        {
          path:'/profile',
          element:<Profile></Profile>
        },
        {
          path:'/teachers',
          element:<Teacher></Teacher>
        },
        {
          path:'/user-dashboard',
          element:<UserDashboard></UserDashboard>
        },
        {
          path:'/coupons-add',
          element:<CouponAdd></CouponAdd>
        },
        {
          path:'/coupons-details',
          element:<CouponDetails></CouponDetails>
        },
        {
          path:'/coupons',
          element:<CouponList></CouponList>
        },
        {
          path:'/subjects',
          element:<SubjectList></SubjectList>
        },
        {
          path:'/settings',
          element:<Settings></Settings>
        },
        {
          path:'/User-tureFalse',
          element:<TrueFalse></TrueFalse>
        },
        {
          path:'/user-allCourses',
          element:<CourseBatchSingleCard></CourseBatchSingleCard>
        },
        {
          path:'/user-mcq',
          element:<MCQ></MCQ>
        }
       
      ]
  },
  {
    path:'/student-home',
    element:<Home></Home>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
  )
