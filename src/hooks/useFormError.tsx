import React from 'react'
import { useState } from 'react'

import FormError from '../components/common/form/FormError'

const useFormError = (initial = '') => {
  const [formError, setFormError] = useState<string>(initial)

  return {
    error: formError,
    setError(error: string) {
      setFormError(error)
    },
    resetError: () => setFormError(initial),
    FormError: () => {
      if (formError === initial) {
        return null
      }
      return <FormError error={formError} onClose={() => setFormError('')} />
    },
  }
}

export default useFormError
