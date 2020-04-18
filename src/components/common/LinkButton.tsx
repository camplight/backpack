import React, { forwardRef, Ref } from 'react'
import Link, { LinkProps } from 'next/link'
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@material-ui/core'

export type LinkRef = HTMLAnchorElement
export type NextLinkProps = Omit<MuiButtonProps, 'href' | 'classes'> &
  Pick<LinkProps, 'href' | 'as' | 'prefetch'>

const NextLink = ({ href, as, prefetch, ...props }: LinkProps, ref: Ref<LinkRef>) => (
  <Link href={href} as={as} prefetch={prefetch} passHref>
    <MuiButton buttonRef={ref} {...props} />
  </Link>
)

export default forwardRef<LinkRef, NextLinkProps>(NextLink)
