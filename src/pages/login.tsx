import { Box } from '@chakra-ui/core'
import React from 'react'
import LoginForm from '../components/forms/loginForm'
import Layout from '../components/layout'

const Login: React.FC = () => {
  return (
    <Layout>
      <Box display="flex" justifyContent="center">
        <Box w={300}>
          <LoginForm />
        </Box>
      </Box>
    </Layout>
  )
}

export default Login
