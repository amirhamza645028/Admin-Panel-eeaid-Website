
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
import Profile from './Pages/admin/profile/Profile';
import Teacher from './Pages/admin/teachers/Teacher';
// import NavBar from './Layout/NavBar';
import UserDashboard from './Pages/User/profile/UserDashboard';
// import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
      path:'/',
      // element:<Home></Home>,
      
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
          ptha:'/user-dashboard',
          element:<UserDashboard></UserDashboard>
        }
       
      ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={router} />
    </div>
    
  
    
  </React.StrictMode>
  )
