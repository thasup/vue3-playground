import { getProductsAPI } from '@/services/product'
import { transformProductList } from '@/transforms/product'
import type { ProductList } from '@/types/product'

interface ProductStore {
  list: {
    isLoading: boolean
    response: ProductList | null
  }
}

const toastStore = useToastStore()

export const useProductStore = defineStore('product', {
  state: (): ProductStore => ({
    list: {
      isLoading: false,
      response: null,
    },
  }),

  getters: {
    productList: (state: ProductStore) => {
      if (!state.list.response) {
        return []
      }

      return transformProductList(state.list.response.products)
    },
  },

  actions: {
    async getDeviceList() {
      this.list.isLoading = true

      const { data, errorMessage } = await getProductsAPI()
      if (data.value) {
        const result = data.value
        this.list.response = result
      }

      if (errorMessage.value) {
        toastStore.showErrorToast(errorMessage.value)
      }

      this.list.isLoading = false
    },
  },
})
