import { CartCounter } from "@/app/components/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "shopping Cart",
  description: "A page to view and modify a shopping cart",
}


export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <span>Productos en el carrito</span>
      <CartCounter />
    </div>
  );
}
