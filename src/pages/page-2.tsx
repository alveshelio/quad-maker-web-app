import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Heading, Text } from '@chakra-ui/core'
import { useTranslation, Link } from '@3nvi/gatsby-theme-intl'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage: React.FC = () => {
  const { t } = useTranslation()

  const LANGUAGES_QUERY = gql`
    {
      languages {
        name
        code
        id
      }
    }
  `

  const { data, error } = useQuery(LANGUAGES_QUERY)

  console.warn({ error })
  console.warn('data', JSON.stringify(data, null, 2))

  return (
    <Layout>
      <SEO title="Page two" description="The second page" />
      <Heading>{t('home.greeting')}</Heading>
      <Text>{t('home.details')}</Text>
      <Link to="/">{t('common.goToHomePage')}</Link>
    </Layout>
  )
}

export default SecondPage
