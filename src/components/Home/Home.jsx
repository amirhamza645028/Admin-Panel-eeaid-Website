import React from 'react'

import AdminLayout from '../../Layout/AdminLayout'
import NavBar from '../../Layout/NavBar'
import UserDashboard from '../../Pages/User/profile/UserDashboard'
import MySuport from '../../Pages/User/suport/MySuport'
import CourseDashboard from '../../Pages/User/course/myCourse/courseDashboard/CourseDashboard'

function Home() {
  return (
    <div>
          {/* <AdminLayout></AdminLayout>  */}
          <NavBar></NavBar>
          <UserDashboard></UserDashboard>
          <MySuport></MySuport>
          <CourseDashboard></CourseDashboard>

    </div>
  
  )
}

export default Home