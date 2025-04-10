# Plataforma E-commerce

Este proyecto es una tienda online desarrollada como parte de una prueba técnica. Utiliza la [Fake Store API](https://fakestoreapi.com/) para mostrar productos y permite filtrarlos por categoría, ver detalles individuales y navegar entre páginas.

## Instrucciones para ejecutar el proyecto localmente

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   ```

2. Accede a la carpeta del proyecto:

   ```bash
   cd tu-repo
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Ejecuta el entorno de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre tu navegador en `http://localhost:3000`

---

### 🔗 Puedes revisar el sitio ahora mismo en https://e-commerce-platform-mocha.vercel.app/ 

---

## Funcionalidades implementadas

- **Home con sección hero y categorías destacadas.**
- **Listado de productos con:**
  - Filtrado por categoría.
  - Paginación.
- **Página de detalle de producto.**
- **Navegación optimizada con `Link` de Next.js.**
- **Componentes reutilizables (`Card`, `FilterSidebar`, etc.).**

---

## Tecnologías utilizadas

- **Next.js 15** (App Router)
- **React Query (TanStack)** para manejo de datos asincrónicos y caché
- **Tailwind CSS** para estilos
- **Fake Store API** como fuente de datos

---

## Decisiones técnicas

Aunque la elección del stack fue establecida previamente, se tomaron decisiones que buscaban mejorar la estructura y escalabilidad del proyecto:

- Uso de **componentes reutilizables** para mantener una estructura clara y mantenible.
- Separación de lógica en **hooks personalizados**, como `useProducts`.
- Implementación básica de **React Query** para el manejo de llamadas asincrónicas y estados (`isLoading`, `isError`).

---

## Desafíos enfrentados

- **Primera vez utilizando Next.js 15**: Aprender su estructura con App Router, layouts y routing dinámico fue un reto clave.
- **Introducción a React Query**: Entender cómo funciona la caché, el fetching y la gestión de estados asincrónicos.
- **Navegación con `Link`**: Reemplacé etiquetas `<a>` para lograr una navegación fluida sin recarga de página.
- **Filtrado y paginado**: Reorganizar estas funcionalidades en componentes separados para mejorar la legibilidad.

---

## Mejoras futuras

- Implementar **soporte de tema dark/light** con Tailwind.
- Agregar sistema de **favoritos**.
- Completar la lógica de **carrito de compras**, incluyendo cantidad, eliminación e integración futura con checkout.
- Añadir funcionalidades en la sección **"Mi cuenta"**, como historial de pedidos y edición de datos.
- Implementar **pruebas unitarias** en componentes clave.