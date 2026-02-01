
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
import MySuport from './Pages/User/suport/MySuport';
import CourseDashboard from './Pages/User/course/myCourse/courseDashboard/CourseDashboard';
import Login from './Pages/User/singIn/Login';
import Register from './Pages/User/singIn/Register';
import Permision from './Pages/admin/rolePermistion/Permision';
import SubjectDetails from './Pages/admin/subjects/SubjectDetails';
import Topic from './Pages/admin/topic/Topic';
import Questions from './Pages/admin/questions/Questions';
import Exams from './Pages/admin/exam/Exams';
import AddExam from './Pages/admin/exam/AddExam';
import Purchases from './Pages/admin/purchases/Purchases';
import Invoice from './Pages/admin/invoice/Invoice';
import Logout from './Pages/admin/logout/Logout';

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
          path:'/roles',
          element:<Permision></Permision>
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
          path:'/subject-add',
          element:<SubjectDetails></SubjectDetails> //ekhane subject add page ta add korte hobe [TODO:  ]
        },
        {
          path:'/topics',
          element:<Topic></Topic>
        },
        {
          path:'/questions',
          element:<Questions></Questions>
        },
        {
          path:'/exams',
          element:<Exams></Exams>
        },
        {
          path:'/mcq-exams/new',
          element:<AddExam></AddExam>
        },
        {
          path:'/purchases',
          element:<Purchases></Purchases>
        },
        {
        path:'/invoices',
        element:<Invoice></Invoice>  
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
        },
        {
          path:'/user-suport',
          element:<MySuport></MySuport>
        },
        {
          path:'/user-CurseDashboard',
          element:<CourseDashboard></CourseDashboard>
        },
        {
          path:'/user-login',
          element:<Login></Login>
        },
        {
          path:'/user-register',
          element:<Register></Register>
        },
        {
          path:'/Logout',
          element:<Logout></Logout>
        }
       
      ]
  },
  {
    path:'/student-home',
    element:<Home></Home>
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
  )
