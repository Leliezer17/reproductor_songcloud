export const addClickListener = (element, listener) => {
    element.addEventListener('click', listener)
  }
  
  export const removeAllChild = (father) => {
    while (father.hasChildNodes()) {
      father.removeChild(father.firstChild)
    }
  }
  
  export const useLocalstorage = (key) => {
  
    const setItem = (newValue) => localStorage.setItem(key, JSON.stringify(newValue))
    const getItem = () => JSON.parse(localStorage.getItem(key))
    return {
      setItem,
      getItem
    }
  }