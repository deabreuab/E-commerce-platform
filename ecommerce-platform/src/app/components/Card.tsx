import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
};

export const Card = ({ product }: { product: Product }) => {
  return (
    <div className="h-100 w-68 rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-72">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          />
          <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
            <Heart size={18} className="text-gray-700" />
          </button>
        </div>

        <div className="flex flex-col p-4 gap-2">
          <h3 className="text-md font-medium text-gray-900">
            {product.title.length > 26
              ? product.title.slice(0, 26)
              : product.title}
          </h3>
          <h3 className="text-md font-bold text-gray-700">
            ${product.price.toFixed(2)}
          </h3>
        </div>
      </Link>
    </div>
  );
};
