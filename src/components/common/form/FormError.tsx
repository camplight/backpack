import React from 'react'
import { Grid, Grow } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

export default function FormError({
  error,
  onClose,
}: {
  error: string
  onClose?: (event: React.SyntheticEvent) => void
}) {
  return (
    <Grow in>
      <Grid item xs={12}>
        <Alert severity="error" onClose={onClose}>
          {error}
        </Alert>
      </Grid>
    </Grow>
  )
}
