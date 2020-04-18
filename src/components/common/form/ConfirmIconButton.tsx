import React, { useState, ReactNode } from 'react'
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  IconButtonProps,
} from '@material-ui/core'

import { useConfirm, ConfirmProps } from '../../../hooks'

export type ConfirmButtonProps = {
  buttonIcon: ReactNode
  buttonLabel: string
  buttonProps: IconButtonProps
  dialogTitle: string
  dialogContent: string
} & ConfirmProps

export default function ConfirmIconButton({
  buttonIcon,
  buttonLabel,
  dialogTitle,
  dialogContent,
  buttonProps,
  onConfirm,
  onClose,
}: ConfirmButtonProps) {
  const { loading, open, openHandler, closeHandler, confirmHandler } = useConfirm({
    onConfirm,
    onClose,
  })
  return (
    <>
      <IconButton title={buttonLabel} disabled={loading} onClick={openHandler} {...buttonProps}>
        {loading ? <CircularProgress color="primary" size={24} /> : buttonIcon}
      </IconButton>
      <Dialog
        open={open}
        onClose={closeHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{dialogContent}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeHandler} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmHandler} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
