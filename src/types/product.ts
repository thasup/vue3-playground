export interface ProductList {
  products: ProductRequest[]
  total: number
  skip: number
  limit: number
}

export interface ProductRequest {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: string
  stock: number
  brand: string
  category: string
  thumbnail: string
}

export interface Product {
  id: number
  title: string
  price: number
  brand: string
}
