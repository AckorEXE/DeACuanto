# 🤑 ¿De A Cuánto?

Divide los gastos de una salida entre amigos y descubre, con el mínimo de transferencias posibles, quién le debe pagar a quién.

## 🚀 Tecnologías utilizadas

*   **Base:** HTML + JavaScript vanilla (sin frameworks, sin build de por medio en tiempo de ejecución)
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (precompilado a un `styles.css` estático)
*   **Tipografías:** [Poppins](https://fonts.google.com/specimen/Poppins) e [Indie Flower](https://fonts.google.com/specimen/Indie+Flower) (Google Fonts)
*   **Hosting:** [Vercel](https://vercel.com/)

## ✨ Características principales

- 🧮 **Cálculo inteligente:** simplifica las deudas al menor número de pagos posible entre todos.
- 💸 **Pagos compartidos:** un mismo gasto puede pagarlo más de una persona, con auto-cálculo del resto.
- 🌗 **Modo claro/oscuro:** automático según el dispositivo, con botón para cambiarlo.
- 💱 **Multi-moneda:** MXN, USD, EUR, JPY y otras populares.
- 💾 **Guardado local:** tu progreso se guarda en el navegador, sin necesidad de cuenta ni backend.
- 📱 **100% responsive**, sin dependencias externas en tiempo de ejecución.

## 🛠️ Instalación y desarrollo

Si quieres ejecutar este proyecto localmente:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/TU-USUARIO/de-a-cuanto.git
   cd de-a-cuanto
   ```

2. **Abre `index.html` directamente en tu navegador** — no requiere servidor ni build para verse (el CSS ya viene compilado).

### Si modificas clases de Tailwind

Solo entonces necesitas regenerar `styles.css`:

1. **Instala las dependencias:**
   ```bash
   npm install
   ```

2. **Recompila el CSS:**
   ```bash
   npm run build
   ```

## ☁️ Desplegar en Vercel

```bash
npm i -g vercel
vercel --prod
```

O importando el repositorio directamente desde [vercel.com/new](https://vercel.com/new) — Vercel detecta el `vercel.json` y corre `npm run build` automáticamente.

---
Desarrollado con ❤️ por **AckorEXE**
