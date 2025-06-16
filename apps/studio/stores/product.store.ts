import {atom, createStore} from 'jotai'
import {create} from 'zustand'

interface ProductStore {
  attribute: string
  setAttribute: (attribute: string) => void
}

export const useProductStore = create<ProductStore>()((set) => ({
  attribute: '',
  setAttribute: (by) => set((state) => ({attribute: by})),
}))

export const attributeAtom = atom('seo')
export const productStore = createStore()
