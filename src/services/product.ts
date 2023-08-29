import type { ProductList } from '@/types/product'

export const getProductsAPI = () => {
  return useRequest<ProductList>('/products', REQUEST_METHOD.GET, {})
}
