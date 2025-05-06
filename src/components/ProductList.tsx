import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../../../shop_cart/src/context/cartContext';
import { products } from '@/data/products';
import { Product } from '@/types/Product';

const ProductList: React.FC = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const addToCart = (product: Product) => {
    setCart((cartItems) => {
      const isExists = cartItems.find((cartItem) => cartItem.id === product.id)
      if (isExists) {
        return cartItems.map((cartItem) =>
          cartItem.id === product.id ? {...cartItem, quantity: cartItem.quantity += 1 } : cartItem
        )
      }
      return [...cartItems, {...product, quantity: 1}]
    })
  }

  return (
    <div className='p-4'>
      <h2 className='text-xl font-bold mb-4'>Product List</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg: grid-cols-3 gap-6'>
        {products.map((product) => (
          <div 
            key={product.id}
            className='border rounded-lg p-4 shadow hover:shadow-md transition'
          >
            <h3 className='text-lg font-semibold'>{product.name}</h3>
            <p className='mt-2'>
              Price: ${(Number(product.price) / 100).toFixed(2)}
            </p>
            <button
              onClick={() => addToCart(product)}
              className='mt-4 w-full py-2 rounded bg-blue-500 hover:bg-blue-600 text-white'
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList;