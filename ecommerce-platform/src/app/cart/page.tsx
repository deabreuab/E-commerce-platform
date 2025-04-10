import { Clock } from "lucide-react";

export default function CartPage() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
        Tus compras
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-8 max-w-xl w-full text-center space-y-4">
        <p className="text-lg text-gray-800">Aquí aparecerán los productos que agregues a la bolsa.</p>
        <div className="flex items-center justify-center gap-2 text-teal-600 font-medium">
          <Clock className="w-5 h-5" />
          <span>Funcionalidad disponible próximamente</span>
        </div>
      </div>

      <p className="text-sm text-gray-400 italic">Estamos trabajando para mejorar tu experiencia 💚</p>
    </div>
  );
}
