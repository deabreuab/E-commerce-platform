import { useQuery } from "@tanstack/react-query";

type Product = {
    id: number;
    title: string;
    image: string;
    description: string;
    category: string;
    price: number;
  };

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
};

// hooks/useProducts.ts
export const useProductById = (id: number) => {
  return useQuery<Product, Error>({
    // Añadimos tipos explícitos
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error(`Producto con ID ${id} no encontrado`);
      }
      return response.json();
    },
    enabled: !!id, // Solo ejecuta la query si el id existe
    staleTime: 60 * 1000, // 1 minuto de caché
  });
};
