import React from 'react'
import { Switch } from '@material-ui/core'
import { Controller, useFormContext, EventFunction } from 'react-hook-form'

export type StatusProps = {
  isChecked: (status: boolean | string) => boolean
  onChange?: EventFunction
}

export default function StatusController({ onChange, isChecked }: StatusProps) {
  const { control, watch } = useFormContext()
  const status = watch('status')
  return (
    <Controller
      as={<Switch checked={isChecked(status)} />}
      name="status"
      control={control}
      onChange={onChange}
    />
  )
}
