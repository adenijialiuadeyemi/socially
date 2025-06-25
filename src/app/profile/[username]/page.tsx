import React from 'react'

const ProfilePage = ({ params }: { params: { username: string } }) => {
  console.log(params)
  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage