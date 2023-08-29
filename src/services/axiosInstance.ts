import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

export const HTTP_STATUS_CODE = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
}

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 180000, // 3 mins
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

const interceptorRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  return config
}

const interceptorRequestError = (error: AxiosError) => {
  return Promise.reject(error)
}

const interceptorResponse = (response: AxiosResponse): AxiosResponse => {
  return response
}

const interceptorResponseError = async (error: AxiosError): Promise<AxiosError | null> => {
  const { status } = (error.response as AxiosResponse) ?? {}
  const authStore = useAuthStore()
  const errorResult = ref<AxiosError | null>(null)

  switch (status) {
    case HTTP_STATUS_CODE.NOT_FOUND:
      window.location.href = ROUTE.NOT_FOUND.PATH
      break
    case HTTP_STATUS_CODE.UNAUTHORIZED:
      authStore.removeUser()
      window.location.href = ROUTE.LOGIN.PATH
      break
    default:
      errorResult.value = error
      break
  }

  return Promise.reject(errorResult.value)
}

apiClient.interceptors.request.use(interceptorRequest, interceptorRequestError)
apiClient.interceptors.response.use(interceptorResponse, interceptorResponseError)
