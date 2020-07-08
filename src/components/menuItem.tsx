import React from 'react'
import { LinkProps } from '@chakra-ui/core'

import NavLink from './navLink'
const MenuItem: React.FC<LinkProps> = ({
  children,
  ...restProps
}: LinkProps) => (
  <NavLink
    color="white"
    _hover={{ textDecoration: 'none' }}
    px={2}
    {...restProps}
  >
    {children}
  </NavLink>
)

export default MenuItem
