import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/core'
import { useTranslation } from '@3nvi/gatsby-theme-intl'
import { useFieldArray, useForm } from 'react-hook-form'

import Layout from '../components/layout'
import MemberField from '../components/memberField'
import SEO from '../components/seo'

const CreateSquad: React.FC = () => {
  const { t } = useTranslation()
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
    <Layout>
      <SEO title="Create Squads" description="Create your squad " />
      <Heading>{t('home.greeting')}</Heading>
      <Text>{t('home.details')}</Text>
      <Text>{t('home.prompt')}</Text>

      <Box>
        <MemberField
          namePlaceholder="Participant 1"
          name="participant-1"
          email="participant-email-1"
          emailPlaceholder="participant@gmail.com"
          control={control}
          removeMember={remove}
        />
      </Box>
    </Layout>
  )
}

export default CreateSquad
