"use client";
import ProductList from "@/components/ProductList";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <div className="min-h-screen p-8">
        <ProductList/>
      </div>
    </RecoilRoot>
  );
}
