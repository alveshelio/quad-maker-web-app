import React from 'react'
import { navigate } from 'gatsby'
import { usePageContext } from '@3nvi/gatsby-theme-intl'

interface PrivateRouteProps {
  path: string
  Component: any
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  Component,
  path,
  ...rest
}: PrivateRouteProps) => {
  const { lang } = usePageContext()
  // if (!isSignedIn) {
  //   navigate(`/${lang}/login`)
  //   return null
  // }
  return <Component {...rest} />
}

export default PrivateRoute
