import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form'

interface Inputs {
  activityName: string
  numberParticipants: number
}

const ActivityForm = () => {
  const { register, handleSubmit, errors, formState, control } = useForm<
    Inputs
  >({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      activityName: '',
      numberParticipants: 10,
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'participant',
  })
}
