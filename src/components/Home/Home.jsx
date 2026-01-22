import React from 'react'

import AdminLayout from '../../Layout/AdminLayout'
import NavBar from '../../Layout/NavBar'
import UserDashboard from '../../Pages/User/profile/UserDashboard'

function Home() {
  return (
    <div>
          {/* <AdminLayout></AdminLayout>  */}
          <NavBar></NavBar>
          <UserDashboard></UserDashboard>

    </div>
  
  )
}

export default Home