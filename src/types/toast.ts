import type { TOAST_TYPE } from '@/enums/toast'

export interface Toast {
  header: string
  content: string
  type: ToastType
  isShow: boolean
}

export type ToastType = TOAST_TYPE.SUCCESS | TOAST_TYPE.ERROR | TOAST_TYPE.WARNING | TOAST_TYPE.INFO
