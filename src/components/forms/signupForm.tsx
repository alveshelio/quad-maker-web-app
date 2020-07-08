import React from 'react'
import {
  Button,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  FormControl,
  Stack,
  Divider,
  Checkbox,
  Flex,
} from '@chakra-ui/core'
import { useForm } from 'react-hook-form'
import { RiLockPasswordLine, RiUserLine } from 'react-icons/ri'
import NavLink from '../navLink'
import { auth } from '../../lib/auth/nhostAuth'

type Inputs = {
  firstName: string
  lastName: string
  email: string
  password: string
}

interface SignUpFormProps {
  closeModal: () => void
}
const SignUpForm: React.FC<SignUpFormProps> = ({
  closeModal,
}: SignUpFormProps) => {
  const { register, handleSubmit, errors } = useForm<Inputs>()

  const onSubmit = async (data: unknown) => {
    try {
      await auth.register(data)
      closeModal()
    } catch (e) {
      console.warn('there was an error', e.message)
    }
    console.warn({ data })
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormControl isRequired={true}>
            <InputGroup>
              <InputLeftElement py={8}>
                <Icon name="info" size="24px" />
              </InputLeftElement>
              <Input
                name="firstName"
                type="text"
                placeholder="First Name"
                aria-label="First Name"
                ref={register({ required: true })}
                py={8}
              />
            </InputGroup>
            {errors.firstName && <span>This field is required</span>}
          </FormControl>
          <FormControl isRequired={true}>
            <InputGroup>
              <InputLeftElement py={8}>
                <Icon name="info" size="24px" />
              </InputLeftElement>
              <Input
                name="lastName"
                type="text"
                placeholder="Last Name"
                aria-label="Last Name"
                ref={register({ required: true })}
                py={8}
              />
            </InputGroup>
            {errors.lastName && <span>This field is required</span>}
          </FormControl>
          <Divider />
          <FormControl isRequired={true}>
            <InputGroup>
              <InputLeftElement py={8}>
                <Box as={RiUserLine} size="24px" />
              </InputLeftElement>
              <Input
                name="email"
                type="email"
                placeholder="example@gmail.com"
                aria-label="email"
                ref={register({ required: true })}
                py={8}
              />
            </InputGroup>
            {errors.email && <span>This field is required</span>}
          </FormControl>
          <FormControl isRequired={true}>
            <InputGroup>
              <InputLeftElement py={8}>
                <Box as={RiLockPasswordLine} size="24px" />
              </InputLeftElement>
              <Input
                name="password"
                aria-label="password"
                placeholder="your password"
                type="password"
                ref={register({ required: true })}
                py={8}
              />
            </InputGroup>
            {errors.password && <span>This field is required</span>}
          </FormControl>
          <Flex justifyContent="space-between">
            <Checkbox variantColor="teal" mr={2} />
            <Box as="p">
              I accept the{' '}
              <NavLink
                href="#"
                color="teal.500"
                _hover={{ textDecoration: 'none' }}
              >
                Terms and Conditions
              </NavLink>{' '}
              and{' '}
              <NavLink
                href="#"
                color="teal.500"
                _hover={{ textDecoration: 'none' }}
              >
                Privacy Policy
              </NavLink>
            </Box>
          </Flex>
          <Button type="submit" py={8} variantColor="teal">
            Sign Up
          </Button>
        </Stack>
      </form>
    </Box>
  )
}

export default SignUpForm
