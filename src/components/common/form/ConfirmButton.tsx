import React, { ReactNode } from 'react'
import {
  Button,
  ButtonProps,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'

import { useConfirm, ConfirmProps } from 'src/hooks'

export type ConfirmButtonProps = {
  buttonIcon: ReactNode
  buttonLabel: string
  buttonProps: ButtonProps
  dialogTitle: string
  dialogContent: string
} & ConfirmProps

export default function ConfirmButton({
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
      <Button
        type="button"
        variant="contained"
        onClick={openHandler}
        disabled={loading}
        startIcon={loading ? <CircularProgress color="primary" size={16} /> : buttonIcon}
        {...buttonProps}>
        {buttonLabel}
      </Button>
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
