import React from 'react'
import { RouterProps } from '@reach/router'

interface ProfileProps extends RouterProps {
  path: string
}

const Profile: React.FC<ProfileProps> = ({ path }: ProfileProps) => (
  <div>
    <p>you are here: {path}</p>
    <h1>This is the profile page</h1>
    <p>This page is only accessible to logged in users!!!!!</p>
  </div>
)

export default Profile
