let key: string
let value: string

function resetLocalStorage() {
  localStorage.removeItem(key)
  key = ''
  value = ''
}

describe('setLocalStorage', () => {
  afterEach(() => {
    resetLocalStorage()
  })

  test('should store empty string when set empty value', () => {
    key = 'test'
    value = ''
    setLocalStorage(key, value)
    expect(localStorage.getItem(key)).toEqual(value)
  })

  test('should store value correctly when set value as string', () => {
    key = 'test'
    value = 'Hello'
    setLocalStorage(key, value)
    expect(localStorage.getItem(key)).toEqual(value)
  })
})

describe('getLocalStorage', () => {
  afterEach(() => {
    resetLocalStorage()
  })

  test('should return empty string when value is empty', () => {
    key = 'test'
    value = ''
    localStorage.setItem(key, value)
    expect(getLocalStorage(key)).toEqual(value)
  })

  test('should return value correctly when value is string', () => {
    key = 'test'
    value = 'Hello'
    localStorage.setItem(key, value)
    expect(getLocalStorage(key)).toEqual(value)
  })

  test('should return value correctly when value is object', () => {
    const mockData = {
      value: 'test',
    }
    key = 'test'
    value = JSON.stringify(mockData)
    localStorage.setItem(key, value)
    expect(getLocalStorage(key)).toEqual(mockData)
  })
})

describe('removeLocalStorage', () => {
  afterEach(() => {
    resetLocalStorage()
  })

  test('should return empty string when remove value from localStorage', () => {
    key = 'test'
    value = 'Hello'
    setLocalStorage(key, value)
    expect(getLocalStorage(key)).toEqual(value)

    removeLocalStorage(key)
    expect(getLocalStorage(key)).toEqual('')
  })
})
