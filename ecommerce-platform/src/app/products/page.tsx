"use client";
import { useState } from "react";
import { Card } from "../components/Card";
import { useProducts } from "../hooks/useProducts";
import { FiltersSidebar } from "../components/FiltersSidebar";
import {
  ArrowLeftFromLine,
  ArrowLeftToLine,
  ArrowRightToLine,
} from "lucide-react";

type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  price: number;
};

export default function ProductsPage() {
  const { data: products, isLoading, isError } = useProducts();

  // Filtros
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Aplica filtros
  let filteredProducts = products || [];
  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(
      (product: Product) => product.category === selectedCategory
    );
  }

  // Aplica orden por precio
  if (sortOrder === "asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  // Categorías únicas para el filtro
  const categories: string[] = Array.from(
    new Set(products?.map((p: Product) => p.category))
  );

  // Paginación con productos ya filtrados
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Controles de paginación
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Reset de filtros
  const resetFilters = () => {
    setSelectedCategory(null);
    setSortOrder(null);
    setCurrentPage(1);
  };

  return (
    <main className="flex min-h-screen">
      {/* Aside: filtros */}
      <FiltersSidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        resetFilters={resetFilters}
        categories={categories}
        totalVisible={filteredProducts.length}
      />

      {/*productos */}
      <section className="flex-1 p-4 md:ml-1/5">
        {isLoading && <p>Cargando productos...</p>}
        {isError && <p>Error al cargar los productos.</p>}

        <p className="text-sm text-gray-700 mb-4">
          Mostrando {currentProducts.length} productos
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentProducts.map((product: Product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 flex items-center justify-center 
             h-12 w-14 sm:h-12 sm:w-32 transition-all gap-2"
            >
              <ArrowLeftToLine size={20} color="#111827" />
              <span className="hidden sm:block text-gray-900">Anterior</span>
            </button>

            <span className="font-medium">
              Página {currentPage} de {totalPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 flex items-center justify-center 
             h-12 w-12 sm:h-12 sm:w-32 transition-all gap-2"
            >
              <span className="hidden sm:block text-gray-900">Siguiente</span>
              <ArrowRightToLine size={20} color="#111827" />
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
