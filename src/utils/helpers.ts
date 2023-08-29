export const getLocalStorage = (key: string) => {
  const stringValue = localStorage.getItem(key) || ''
  try {
    return JSON.parse(stringValue)
  }
  catch {
    return stringValue
  }
}

export const setLocalStorage = (key: string, data: string) => {
  localStorage.setItem(key, data)
}

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}

