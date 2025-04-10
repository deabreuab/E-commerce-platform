"use client";
import { Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/Gray and Black Simple Studio Logo.svg";
import { usePathname } from "next/navigation";
import { CartSidebar } from "./CartSidebar";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center p-4 text-gray-900 max-h-20">
      <div className="flex justify-items-start">
        <Link href="/" className="flex items-center max-h-20 max-w-80">
          <Image src={logo} alt="logo" width={190} height={80} priority></Image>
        </Link>
      </div>
      <div className="flex-grow">
        <nav>
          <ul className=" flex justify-center p-4 gap-8">
            <li>
              <Link
                href="/products"
                className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full hover:text-teal-600"
              >
                Nuevos
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full hover:text-teal-600"
              >
                Chicas
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full hover:text-teal-600"
              >
                Chicos
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full hover:text-teal-600"
              >
                Accesorios
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-end gap-6 m-1 p-4">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link
              href="/favorites"
              className="relative transition-transform hover:scale-110"
            >
              <Heart
                className={`h-6 w-6 transition-colors ${
                  pathname === "/favorites"
                    ? "text-black"
                    : "text-gray-500 hover:text-teal-500"
                }`}
              />

              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-teal-500 text-[10px] font-medium text-white">
                3
              </span>
            </Link>
          </li>
          <li>
            <CartSidebar />
          </li>
          <li>
            <Link href="/account" aria-label="Account">
              <User
                className={`h-6 w-6 transition-colors ${
                  pathname === "/account"
                    ? "text-black"
                    : "text-gray-500 hover:text-teal-500"
                }`}
              />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
