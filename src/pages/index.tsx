import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/core'
import { useTranslation, Link } from '@3nvi/gatsby-theme-intl'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO
        title="Home"
        description="The great hub for the circularity economy"
      />
      <Heading>{t('home.greeting')}</Heading>
      <Text>{t('home.details')}</Text>
      <Text>{t('home.prompt')}</Text>
      <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
        <Image />
      </Box>
      <Link to="/page-2/">{t('common.goToSecondPage')}</Link>
    </Layout>
  )
}

export default IndexPage
