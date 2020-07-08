import React from 'react'
import { Router } from '@reach/router'
import { usePageContext } from '@3nvi/gatsby-theme-intl'

import Layout from '../../components/layout'
import PrivateRoute from '../../components/PrivateRoute'
import Profile from '../../components/pages/Profile'
import Dashboard from '../../components/pages/Dashboard'

const App: React.FC = () => {
  const { lang } = usePageContext()
  return (
    <Layout>
      <Router basepath={`/${lang}/dashboard`}>
        <PrivateRoute path="/profile" Component={Profile} />
        <PrivateRoute path="/" Component={Dashboard} />
      </Router>
    </Layout>
  )
}

export default App
