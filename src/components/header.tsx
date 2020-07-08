import React from 'react'
import { navigate } from 'gatsby'
import {
  Box,
  Image,
  Flex,
  Divider,
  Button,
  useDisclosure,
  useColorMode,
  IconButton,
} from '@chakra-ui/core'
import { WiDaySunny, WiMoonAltWaxingCrescent4 } from 'react-icons/wi'
import { Link as GatsbyLink } from 'gatsby'
import { usePageContext } from '@3nvi/gatsby-theme-intl'

import MenuItem from './menuItem'
import Connection from './modals/connection'
import { auth } from '../lib/auth/nhostAuth'
import { useGlobalState } from '../context/globalContextProvider'

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const { supportedLanguages, originalPath, lang } = usePageContext()
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const logout = async () => {
    await auth.logout()
    await navigate(`/${lang}`)
  }

  console.warn('isAuthenticated', auth.isAuthenticated())
  return (
    <>
      <Flex
        bg="primary"
        px={5}
        py={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
            size={30}
          />
          <MenuItem href="/">{siteTitle}</MenuItem>
        </Flex>
        <Box>
          <Flex>
            <Box>
              <MenuItem href="/">Home</MenuItem>
              <MenuItem href="/page-2">Page 2</MenuItem>
              {auth.isAuthenticated() && (
                <MenuItem href="/dashboard">Dashboard</MenuItem>
              )}
              {!auth.isAuthenticated() && (
                <Button
                  onClick={onOpen}
                  variant="link"
                  color="white"
                  _hover={{ textDecoration: 'none' }}
                >
                  Register / Login
                </Button>
              )}
              {auth.isAuthenticated() && (
                <Button
                  onClick={logout}
                  variant="link"
                  color="white"
                  _hover={{ textDecoration: 'none' }}
                >
                  Logout
                </Button>
              )}
            </Box>
            <Divider orientation="vertical" />
            <Box>
              {supportedLanguages.map((supportedLang) => (
                <GatsbyLink
                  aria-label={`Change language to ${supportedLang}`}
                  key={supportedLang}
                  to={`/${supportedLang}${originalPath}`}
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                    marginRight: '1em',
                  }}
                >
                  {supportedLang.toUpperCase()}
                </GatsbyLink>
              ))}
            </Box>
            <Divider orientation="vertical" />
            <IconButton
              aria-label="Toggle color mode"
              variantColor="tomato"
              size="sm"
              as={colorMode === 'dark' ? WiDaySunny : WiMoonAltWaxingCrescent4}
              onClick={toggleColorMode}
            />
          </Flex>
        </Box>
      </Flex>
      <Connection isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Header
