'use client';
import { Card } from "@/app/components/Card";
import { useProductById, useProducts } from "@/app/hooks/useProducts";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  price: number;
};


export default function ProductDetailPage() {
    const { id } = useParams();
    const { data: product, isLoading, isError, error } = useProductById(Number(id));
    const { data: products } = useProducts();


    if (isLoading) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      );
    }
  
    if (isError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Error</h2>
          <p className="text-gray-700 mb-6">{error?.message || "Ocurrió un error al cargar el producto"}</p>
          <Link 
            href="/products" 
            className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-800"
          >
            Volver al catálogo
          </Link>
        </div>
      );
    }
  
    if (!product) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
          <Link 
            href="/products" 
            className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-800"
          >
            Volver al catálogo
          </Link>
        </div>
      );
    }
  

    return (
      <main className="container mx-auto px-4 py-8">

      <nav className="mb-4 text-sm text-gray-600">
        <Link href="/products" className="hover:text-gray-900">Productos</Link>
        <span className="mx-2">/</span>
        <span className="font-medium">{product.title}</span>
      </nav>


      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-96 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-8"
            priority
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
          </div> 
          <p className="text-gray-700">{product.description}</p>

          <div className="pt-4 border-t">
            <h3 className="font-semibold">Categoría:</h3>
            <p className="text-gray-600 capitalize">{product.category}</p>
          </div>
          <div className="flex gap-6">
          <button className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            Añadir a la bolsa
          </button>

          <button className="mt-6 px-6 py-3 bg-teal-600  text-white rounded-lg hover:bg-teal-800 transition-colors flex gap-2">
            <Heart />
            Favoritos
          </button>
          </div>
        </div>
      </div>
      
      <section className="mt-12 pt-4">
        <h2 className="text-2xl font-bold pb-4">Productos relacionados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {products
            .filter((p: Product) => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map((relatedProduct: Product) => (
              <Card key={relatedProduct.id} product={relatedProduct} />
            ))}
        </div>
      </section>
    </main>
    );
  }