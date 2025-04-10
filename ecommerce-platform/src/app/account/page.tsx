import { Clock } from "lucide-react";

export default function AccountPage() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900">Tu cuenta</h1>

      <div className="bg-white shadow-lg rounded-xl p-8 max-w-xl w-full text-center space-y-4">
        <p className="text-lg text-gray-800">👋 ¡Hola! Bienvenido a tu cuenta.</p>
        <p className="text-lg text-gray-700">
          Aquí podrás ver tus pedidos, editar tu información personal y gestionar tus preferencias.
        </p>
        <div className="flex items-center justify-center gap-2 text-teal-600 font-medium">
          <Clock className="w-5 h-5" />
          <span>Disponible próximamente</span>
        </div>
      </div>

      <p className="text-sm text-gray-400 italic">Gracias por tu paciencia 💚</p>
    </div>
  );
}
