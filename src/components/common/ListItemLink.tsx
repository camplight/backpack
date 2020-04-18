import React, { ReactElement, SyntheticEvent, useEffect, useState } from 'react'
import {
  ListItem,
  ListItemProps as MuiListItemProps,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { useRouter } from 'next/dist/client/router'

export type UrlItem = {
  href: string
  as: string
}

export type ListItemProps = Partial<MuiListItemProps> & {
  icon: ReactElement
  url: string | UrlItem
  primary?: string
}

function currentUrl(url: string | UrlItem): string {
  if (typeof url === 'string') {
    return url
  }
  return url.as
}

const ListItemLink = ({ icon, primary, url }: ListItemProps) => {
  const router = useRouter()
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    // Router is not initially loaded during SSR
    setSelected(router.asPath === currentUrl(url))
  }, [router])

  return (
    <ListItem
      button
      component="a"
      selected={selected}
      onClick={(event: SyntheticEvent) => {
        event.preventDefault()
        if (typeof url === 'string') {
          return router.push(url)
        }
        return router.push(url.href, url.as)
      }}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primary} />
    </ListItem>
  )
}
export default ListItemLink
