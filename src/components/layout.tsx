import React from 'react'
import {
  Box,
  Text,
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
} from '@chakra-ui/core'
import { useStaticQuery, graphql } from 'gatsby'

import theme from '../theme/theme'
import Header from './header'

interface LayoutProps {
  children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Box>
          <React.Suspense fallback={<div>Loading</div>}>
            <Header siteTitle={data.site.siteMetadata.title} />
          </React.Suspense>
          <Box as="main" p={4} overflow="auto" height="calc(100vh - 130px)">
            {children}
          </Box>
          <Box background="light-4" p={4}>
            <Text textAlign="center" size="small">
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
              {` and `}
            </Text>
          </Box>
        </Box>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default Layout
