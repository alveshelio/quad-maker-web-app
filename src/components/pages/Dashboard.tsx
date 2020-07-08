import React from 'react'
import { RouterProps } from '@reach/router'
import { Box } from '@chakra-ui/core'
// import { useAuth } from '../../context/globalContextProvider'

interface DashboardProps extends RouterProps {
  path: string
}

const Dashboard: React.FC<DashboardProps> = ({ path }: DashboardProps) => {
  // const isAuthenticated = useAuth()
  // console.warn('isAuthenticated in dashboard', isAuthenticated)

  return (
    <Box width="100%">
      <p>You are here: {path}</p>
      <h1>Dashboard</h1>
    </Box>
  )
}

export default Dashboard
