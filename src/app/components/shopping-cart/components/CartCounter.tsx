"use client"

import { useState } from "react";


export const CartCounter = () => {
  
  const [counter, setCounter] = useState(5);
  
    return (
    <>
      <span className="text-8xl">{counter}</span>

      <div className="flex gap-2">
        <button
          onClick={() => setCounter(counter + 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[50px]"
        >
          +1
        </button>

        <button
          onClick={() => setCounter(counter - 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[50px]"
        >
          -1
        </button>
      </div>
    </>
  )
}
