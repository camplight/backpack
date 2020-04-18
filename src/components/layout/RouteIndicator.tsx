import Router from 'next/router'
import React, { useState } from 'react'

import { LinearProgress } from '@material-ui/core'

export default function RouteIndicator({ doneDuration = 250 }: { doneDuration: number }) {
  const [loading, setLoading] = useState(false)
  const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout>>()

  const onLoad = () => setLoading(true)
  const onDone = () => {
    setLoading(false)
    const timeoutId = setTimeout(() => {
      setTimeoutId(undefined)
      setLoading(false)
    }, doneDuration)
    setTimeoutId(timeoutId)
  }

  // Register route change event handlers
  React.useEffect(() => {
    Router.events.on('routeChangeStart', onLoad)
    Router.events.on('routeChangeComplete', onDone)
    Router.events.on('routeChangeError', onDone)

    return () => {
      Router.events.off('routeChangeStart', onLoad)
      Router.events.off('routeChangeComplete', onDone)
      Router.events.off('routeChangeError', onDone)
    }
  }, [])

  React.useEffect(() => {
    return () => {
      timeoutId && clearTimeout(timeoutId)
    }
  }, [timeoutId])

  return loading ? <LinearProgress color="secondary" variant="indeterminate" /> : null
}
