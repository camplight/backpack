import _ from 'lodash'
import React from 'react'
import { TextField } from '@material-ui/core'
import { Controller, useFormContext } from 'react-hook-form'

export default function NameController() {
  const { errors, control } = useFormContext()
  return (
    <Controller
      required
      error={!_.isEmpty(errors.name)}
      helperText={errors.name?.message}
      name="name"
      size="small"
      label="Name"
      variant="outlined"
      control={control}
      as={<TextField />}
    />
  )
}
