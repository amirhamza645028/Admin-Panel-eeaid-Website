import React from 'react'

import AdminLayout from '../../Layout/AdminLayout'
import NavBar from '../../Layout/NavBar'
import UserDashboard from '../../Pages/User/profile/UserDashboard'
import MySuport from '../../Pages/User/suport/MySuport'
import CourseDashboard from '../../Pages/User/course/myCourse/courseDashboard/CourseDashboard'
import Register from '../../Pages/User/singIn/Register'
import Login from '../../Pages/User/singIn/Login'

function Home() {
  return (
    <div>
          {/* <AdminLayout></AdminLayout>  */}
          <NavBar></NavBar>
          <UserDashboard></UserDashboard>
          <MySuport></MySuport>
          <CourseDashboard></CourseDashboard>
          <Register></Register>
          <Login></Login>

    </div>
  
  )
}

export default Home