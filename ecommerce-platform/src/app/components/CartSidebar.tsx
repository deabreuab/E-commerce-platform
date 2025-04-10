"use client";

import { ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const CartSidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open cart"
				className="flex items-center relative"
      >
        <ShoppingBag className={`h-6 w-6 cursor-pointer transition-colors ${
                  pathname === "/cart"
                    ? "text-black"
                    : "text-gray-500 hover:text-teal-500"
                }`} />
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-teal-500 text-[10px] font-medium text-white">
                2
        </span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Tu Carrito</h2>
          <button onClick={() => setIsOpen(false)} aria-label="Close cart">
            <X />
          </button>
        </div>

        <div className="p-4">
          <p>Aquí irán los productos del carrito 🛍️</p>
          <Link href={"/cart"} onClick={() => setIsOpen(false)}>
            <button className="mt-4 px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 rounded">
              Ver detalle
            </button>
          </Link>
        </div>
      </aside>
    </>
  );
};
