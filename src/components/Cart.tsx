import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "@/context/cartContext";

const Cart: React.FC = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const totalPrice = cart.reduce((sum, item) =>  sum + (Number(item.price) * item.quantity), 0)

  const increaseQty = (id: Number) => {
    setCart((items) => 
      items.map((item) => 
        item.id === id ? {...item, quantity: item.quantity + 1} : item
      ).filter((item) => item.quantity > 0)
    )
  }

  const decreaseQty = (id: Number) => {
    setCart((items) => 
      items.map((item) => 
        item.id === id ? {...item, quantity: item.quantity - 1} : item
      ).filter((item) => item.quantity > 0)
    )
  }

  const clearCart = () => {
    setCart([]);
  }


  return(
    <div className="p-4 border rounded-lg shadow-md w-full max-w-md bg-white text-black">
      <h2 className="text-xl font-bold md-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="divide-y mt-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center gap-4 mb-4  pb-2">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">${(Number(item.price) / 100).toFixed(2)} x {item.quantity}</p>
                </div>
                <div className="flex items-center gap-2 w-32 flex-shrink-0 justify-end">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-lg font-bold">Total: ${(totalPrice / 100).toFixed(2)}</p>
            <button
              onClick={clearCart}
              className="mt-2 w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded"
            >
              Clear 
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart;
