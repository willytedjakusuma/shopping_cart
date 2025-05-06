import React from "react";
import { cartState } from "@/context/cartContext";
import { FiShoppingCart } from "react-icons/fi";
import { useRecoilValue } from "recoil";

const CartButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const cart = useRecoilValue(cartState)

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  return(
    <button onClick={onClick} className="relative">
      <FiShoppingCart size={28}/>
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{totalItems}</span>
      )}
    </button>
  )
}

export default CartButton;