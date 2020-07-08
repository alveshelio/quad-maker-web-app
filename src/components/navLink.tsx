import { Link } from '@3nvi/gatsby-theme-intl'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/core'
import React from 'react'

const NavLink: React.FC<LinkProps> = ({
  href,
  isExternal,
  ...restProps
}: LinkProps) => {
  return (
    // TODO: Don't opt out from type checking once `ChakraLink` gets fixed
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <ChakraLink
      {...(isExternal ? { href } : { as: Link, to: href })}
      {...restProps}
    />
  )
}

export default NavLink
