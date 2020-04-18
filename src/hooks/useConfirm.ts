import { useState } from 'react'

export type ConfirmProps = {
  onConfirm?: () => void | Promise<void>
  onClose?: () => void | Promise<void>
}

const useConfirm = ({ onConfirm, onClose }: ConfirmProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  return {
    open,
    setOpen,
    loading,
    setLoading,
    openHandler: () => {
      setOpen(true)
      setLoading(true)
    },
    confirmHandler: async () => {
      setOpen(false)
      if (typeof onConfirm === 'function') {
        await onConfirm()
      }
      setLoading(false)
    },
    closeHandler: async () => {
      setOpen(false)
      if (typeof onClose === 'function') {
        await onClose()
      }
      setLoading(false)
    },
  }
}

export default useConfirm
