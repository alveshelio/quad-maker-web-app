import React from 'react'
import { navigate } from 'gatsby'
import {
  Button,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  FormControl,
  Stack,
  Spinner,
} from '@chakra-ui/core'
import { useForm } from 'react-hook-form'
import { RiLockPasswordLine, RiUserLine } from 'react-icons/ri'

import { auth } from '../../lib/auth/nhostAuth'

type Inputs = {
  email: string
  password: string
}

interface LoginFormProps {
  closeModal?: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({
  closeModal,
}: LoginFormProps) => {
  const { register, handleSubmit, errors, formState } = useForm<Inputs>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async ({ email, password }: Inputs) => {
    await auth.login(email, password)
    if (closeModal) {
      closeModal()
    } else {
      await navigate('/')
    }
  }

  const { isValid, isSubmitting } = formState

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={5}>
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
                size="lg"
                ref={register({
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'invalid email address',
                  },
                })}
                py={8}
              />
            </InputGroup>
            {errors.email && <span>{errors.email.message}</span>}
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
          <Button
            type="submit"
            variantColor="teal"
            py={8}
            isDisabled={!isValid}
          >
            {!isSubmitting ? 'Login' : <Spinner size="sm" />}
          </Button>
        </Stack>
      </form>
    </Box>
  )
}

export default LoginForm
