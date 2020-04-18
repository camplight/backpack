import React from 'react'
import { Button, CircularProgress } from '@material-ui/core'

export default function SubmitButton({ loading = false }: { loading?: boolean }) {
  return (
    <Button type="submit" variant="contained" color="primary" disabled={loading}>
      {loading ? <CircularProgress color="primary" size={24} /> : 'Submit'}
    </Button>
  )
}
