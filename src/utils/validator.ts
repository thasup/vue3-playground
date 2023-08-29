import type { ErrorObject } from '@vuelidate/core'

export const getValidationErrorMessage = (errors: ErrorObject[]) => {
  return errors.map(e => e.$message).join('\r\n')
}
