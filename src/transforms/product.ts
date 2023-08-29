import type { Product, ProductRequest } from '@/types/product'

export const transformProductList = (data: ProductRequest[]): Product[] => {
  return data.map(item => {
    return {
      id: item.id,
      title: item.title,
      price: item.price,
      brand: item.brand,
    }
  })
}
