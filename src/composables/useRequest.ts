import type { AxiosRequestConfig } from 'axios'
import { AxiosError } from 'axios'

type RequestConfig = Omit<AxiosRequestConfig, 'url' | 'method' | 'data' | 'params'>

export async function useRequest<T, TError = unknown>(
  url: string,
  method: string,
  payload = {},
  params = {},
  config: RequestConfig = {},
) {
  const data = ref<T>()
  const errorStatus = ref<number | null>()
  const errorMessage = ref<string>('')
  const errorDetails = ref<TError | null>()

  try {
    errorMessage.value = ''
    errorStatus.value = null
    errorDetails.value = null
    const res = await apiClient.request({
      url,
      method,
      params,
      data: payload,
      ...config,
    })

    // Set response to true if not response from API
    data.value = res.data || true
  }
  catch (err) {
    if (err instanceof AxiosError) {
      errorMessage.value = err?.response?.data.message
      errorStatus.value = err?.response?.status
      errorDetails.value = err?.response?.data.errors
    }
  }

  return {
    data,
    errorMessage,
    errorStatus,
    errorDetails,
  }
}
