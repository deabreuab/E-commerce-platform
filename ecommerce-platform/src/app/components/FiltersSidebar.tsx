type FiltersSidebarProps = {
  selectedCategory: string | null;
  setSelectedCategory: (value: string | null) => void;
  sortOrder: "asc" | "desc" | null;
  setSortOrder: (value: "asc" | "desc" | null) => void;
  resetFilters: () => void;
  categories: string[];
  totalVisible: number;
};

export const FiltersSidebar = ({
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder,
  resetFilters,
  categories,
}: FiltersSidebarProps) => {
  return (
    <aside className="w-full md:w-1/4 lg:w-1/5 bg-white p-4 h-fit top-24 overflow-y-auto">
      <h2 className="font-bold mb-4">Filtros</h2>

      {/* Filtro por categoría */}
      <div className="mb-4">
        <label className="block mb-1">Categoría</label>
        <select
          value={selectedCategory || ""}
          onChange={(e) =>
            setSelectedCategory(e.target.value === "" ? null : e.target.value)
          }
          className="w-full p-2 rounded"
        >
          <option value="">Todas</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Ordenar por precio */}
      <div className="mb-4">
        <label className="block mb-1">Ordenar por precio</label>
        <select
          value={sortOrder || ""}
          onChange={(e) =>
            setSortOrder(
              e.target.value === ""
                ? null
                : (e.target.value as "asc" | "desc")
            )
          }
          className="w-full p-2 rounded"
        >
          <option value="">Sin orden</option>
          <option value="asc">Menor a mayor</option>
          <option value="desc">Mayor a menor</option>
        </select>
      </div>

      {/* Botón para resetear */}
      <button
        onClick={resetFilters}
        className="w-full bg-gray-500 hover:bg-gray-600 transition-all duration-300 hover:shadow-md p-4 rounded-lg text-white font-semibold"
      >
        Resetear filtros
      </button>
    </aside>
  );
};
