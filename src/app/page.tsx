"use client";
import CartButton from "@/components/CartButton";
import ProductList from "@/components/ProductList";
import { RecoilRoot } from "recoil";
import { useState } from "react";
import Cart from "@/components/Cart";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <RecoilRoot>
      <div className="min-h-screen p-8 relative">
        <div className="absolute top-8 right-8">
          <CartButton onClick={() => setIsCartOpen((open) => !open)} />
        </div>
        {isCartOpen && (
          <div className="absolute top-20 right-8 z-50">
            <Cart/>
          </div>
        )}
        <ProductList/>
      </div>
    </RecoilRoot>
  );
}
