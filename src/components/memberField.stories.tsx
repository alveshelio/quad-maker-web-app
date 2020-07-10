import { ThemeProvider } from '@chakra-ui/core'
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import theme from '../theme/theme'
import MemberField from './memberField'

export default {
  title: 'MemberField',
  parameters: {
    component: MemberField,
    componentSubtitle:
      'Example stories for the Gatsby <MemberField /> component',
  },
}

export const usage = () => {
  const { control } = useForm({
    defaultValues: {
      member: [{ name: 'participant', email: 'participant@gmail.com' }],
    },
  })

  const { remove } = useFieldArray({
    control,
    name: 'member',
  })
  return (
    <ThemeProvider theme={theme}>
      <MemberField
        name="member-1"
        namePlaceholder="Participant 1"
        email="email-member-1"
        emailPlaceholder="participant1@mail.com"
        control={control}
        removeMember={remove}
      />
    </ThemeProvider>
  )
}

export const attributes = () => {
  const { control } = useForm({
    defaultValues: {
      member: [{ name: 'participant', email: 'participant@gmail.com' }],
    },
  })

  const { remove } = useFieldArray({
    control,
    name: 'member',
  })
  return (
    <ThemeProvider theme={theme}>
      <MemberField
        name="member-1"
        namePlaceholder="Participant 1"
        email="email-member-1"
        emailPlaceholder="participant1@mail.com"
        control={control}
        removeMember={remove}
      />
    </ThemeProvider>
  )
}

attributes.story = {
  parameters: {
    docs: {
      storyDescription: 'Legitimate `AnchorHTMLAttributes` can be applied',
    },
  },
}
