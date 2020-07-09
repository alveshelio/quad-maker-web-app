import React from 'react'
import { Controller, Control } from 'react-hook-form'
import {
  Box,
  InputLeftAddon,
  InputGroup,
  IconButton,
  Input,
} from '@chakra-ui/core'

interface MemberFieldProps {
  namePlaceholder: string
  name: string
  email: string
  emailPlaceholder: string
  control: Control
  removeMember: any
}

const MemberField: React.FC<MemberFieldProps> = ({
  name,
  namePlaceholder,
  email,
  emailPlaceholder,
  control,
  removeMember,
}: MemberFieldProps) => (
  <Box>
    <InputGroup>
      <InputLeftAddon>
        <IconButton
          aria-label="remove member"
          icon="close"
          onClick={removeMember}
        />
      </InputLeftAddon>
      <Controller
        name={name}
        as={Input}
        control={control}
        placeholder={namePlaceholder}
        aria-label="name"
        defaultValue=""
      />
      <Controller
        name={email}
        as={Input}
        control={control}
        placeholder={emailPlaceholder}
        aria-label="email"
        defaultValue=""
      />
    </InputGroup>
  </Box>
)

export default MemberField
