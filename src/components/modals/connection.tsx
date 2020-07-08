import React from 'react'
import { useToggle } from 'react-use'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Box,
  Text,
} from '@chakra-ui/core'

import LoginForm from '../forms/loginForm'
import SignUpForm from '../forms/signupForm'

interface ConnectionProps {
  isOpen: boolean
  onClose: () => void
}

const Connection: React.FC<ConnectionProps> = ({
  isOpen,
  onClose,
}: ConnectionProps) => {
  const [displayLoginForm, toggle] = useToggle(true)

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size="xl">
      <ModalOverlay />
      <ModalContent px={10} py={10}>
        <ModalHeader>
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              {displayLoginForm ? (
                <Text fontSize="md">Sign in to continue</Text>
              ) : (
                <Text fontSize="md">Register with</Text>
              )}
            </Box>
            <Box>
              {displayLoginForm ? (
                <Text fontSize="md">
                  Not a member yet?{' '}
                  <Button variant="link" variantColor="teal" onClick={toggle}>
                    Sign Up
                  </Button>
                </Text>
              ) : (
                <Text fontSize="md">
                  Are you a member?{' '}
                  <Button variant="link" variantColor="teal" onClick={toggle}>
                    Login now
                  </Button>
                </Text>
              )}
            </Box>
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {displayLoginForm ? (
            <LoginForm closeModal={onClose} />
          ) : (
            <SignUpForm closeModal={onClose} />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default Connection
