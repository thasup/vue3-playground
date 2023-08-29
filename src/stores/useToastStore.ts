import type { Toast } from '@/types/toast'

interface ToastStore {
  message: Toast
}

export const useToastStore = defineStore('toast', {
  state: (): ToastStore => ({
    message: {
      header: '',
      content: '',
      type: TOAST_TYPE.SUCCESS,
      isShow: false,
    },
  }),

  actions: {
    showToast(data: Toast) {
      this.message = data
    },

    hideToast() {
      this.message = {
        ...this.message,
        isShow: false,
      }
    },

    showErrorToast(error: string) {
      this.showToast({
        header: 'Failed',
        content: error || 'Something went wrong',
        type: TOAST_TYPE.ERROR,
        isShow: true,
      })
    },
  },
})
