"use client";
import { MoveRight } from "lucide-react";
import { Card } from "./components/Card";
import { useProducts } from "./hooks/useProducts";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
};

export default function Home() {
  const { data: products, isLoading, isError } = useProducts();

  return (
    <main className="bg-white">
      <section className="relative h-[80vh] bg-gray-100">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black/30 z-0" />
        </div>

        <div className="absolute flex flex-col items-start justify-center max-w-[42rem] inset-0 text-white p-4 gap-6">
          <h1 className="text-6xl">Summer Collection 2025</h1>
          <p className="text-xl">
            Redefine tu estilo con piezas esenciales que trascienden el tiempo.
          </p>
          <Link href="/products">
          <button className="flex gap-4 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg cursor-pointer">
            <p>Compra ahora</p>
            <MoveRight />
          </button>
          </Link>
        </div>
      </section>
      <section className="mt-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold text-gray-900">
            Categorías Destacadas
          </h2>
        </div>
        <div className="flex flex-wrap justify-evenly gap-6">
          {[
            { label: "Chicas", image: "/img/womenCategory.jpg" },
            { label: "Chicos", image: "/img/menCategory.jpg" },
            { label: "Accesorios", image: "/img/accessoriesCategory.jpg" },
          ].map(({ label, image }) => (
            <Link href={'/products'} key={label}>
            <div
              key={label}
              className="relative group h-80 w-120 rounded-xl overflow-hidden shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h3 className="text-2xl font-semibold">{label}</h3>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="mt-20 mb-16">
        <div className="flex items-start p-2">
          <h2 className="text-4xl font-semibold text-gray-900 text-center mb-10 pl-14">
            Lo + nuevo
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-14">
          {isLoading && <p className="text-gray-500">Cargando productos...</p>}
          {isError && (
            <p className="text-red-500">
              Hubo un error al cargar los productos.
            </p>
          )}
          {products &&
            products
              .slice(0, 5)
              .map((product: Product) => (
                <Card key={product.id} product={product} />
              ))}
        </div>
      </section>
    </main>
  );
}
