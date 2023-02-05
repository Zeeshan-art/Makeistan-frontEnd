import React from 'react'
import ProfilePage from '../../components/ProfilePage'
import './styles.css'

const Profile = () => {
  return (
    <div className='dashboard-content-container'>
          <div className='dashboard-content-header'>
            <h2>Personal Information</h2>
          </div>

          <ProfilePage/>
      
    </div>
  )
}

export default Profile
