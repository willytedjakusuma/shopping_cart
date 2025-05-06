import { CartItem } from '@/types/CartItem'
import { atom } from 'recoil'

export const cartState = atom<CartItem[]>({
  key: 'cartState',
  default: []
})