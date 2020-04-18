import _ from 'lodash'
import React from 'react'
import { TextField } from '@material-ui/core'
import { Controller, useFormContext } from 'react-hook-form'

export default function HiddenIdController() {
  const { errors, control } = useFormContext()
  return (
    <Controller
      required
      error={!_.isEmpty(errors.id)}
      helperText={errors.id?.message}
      name="id"
      size="small"
      variant="outlined"
      control={control}
      as={<TextField type="hidden" />}
    />
  )
}
