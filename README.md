<div align="center">
  <h1>🍞 Bakert – Ecommerce Audit</h1>
  <p>A modern e-commerce auditing platform built with <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Vite</strong>.</p>
  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#project-structure">Project Structure</a> •
    <a href="#scripts">Scripts</a> •
    <a href="#license">License</a>
  </p>

[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2-764ABC?logo=redux)](https://redux-toolkit.js.org/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

</div>

---

## Overview

**Bakert** is a fully-featured e-commerce auditing application that allows users to browse products, manage a shopping cart, and complete checkout. It includes an **Audit Mode** for testing authentication flows, a **dashboard** for order management, and lazy-loaded routing for optimal performance.

---

## Features

- 🛍️ **Product Catalog** – Browse and search products with detailed views.
- 🛒 **Shopping Cart** – Add/remove items; persistent popup cart UI.
- 🔐 **Authentication** – Sign up, log in, and protected routes (checkout & dashboard).
- 📊 **Dashboard** – View and manage orders with a sidebar layout.
- 🧪 **Audit Mode** – One-click test authentication bypass for development/testing.
- 📱 **Responsive UI** – Built with Tailwind CSS for mobile-first design.
- ⚡ **Lazy Loading** – Route-level code splitting via `React.lazy` and `Suspense`.
- 🔔 **Toast Notifications** – Real-time user feedback.
- 🎨 **Framer Motion** – Smooth animations powered by `motion`.

---

## Tech Stack

| Category       | Technology                                                    |
| -------------- | ------------------------------------------------------------- |
| **Framework**  | React 19 + TypeScript 6                                       |
| **Build Tool** | Vite 8                                                        |
| **Styling**    | Tailwind CSS 4 + `clsx` + `tailwind-merge`                    |
| **State Mgmt** | Redux Toolkit 2 + React-Redux 9                               |
| **Routing**    | React Router DOM 7                                            |
| **Animation**  | Motion (Framer Motion) 12                                     |
| **Icons**      | Lucide React 1                                                |
| **Linting**    | ESLint 10 + `typescript-eslint` + `eslint-plugin-react-hooks` |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/mashrafimahin/Bakert-Ecommerce-Audit.git

# Navigate to the project directory
cd Bakert-Ecommerce-Audit

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_TEST_ID=your_test_user_id
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
src/
├── app/
│   ├── features/
│   │   ├── authenticationController.ts
│   │   ├── dashboardController.ts
│   │   ├── globalController.ts
│   │   └── productController.ts
│   └── store/
│       └── index.ts
├── assets/
├── components/
│   ├── boxes/
│   ├── typography/
│   └── ui/
│       ├── button.tsx
│       ├── checkoutProduct.tsx
│       ├── CTA.tsx
│       ├── dashboardSide.tsx
│       ├── flexibleTextBox.tsx
│       ├── footer.tsx
│       ├── Loader.tsx
│       ├── navbar.tsx
│       ├── orderCard.tsx
│       ├── paymentMethods.tsx
│       ├── productCard.tsx
│       ├── productCardView.tsx
│       ├── productSearch.tsx
│       ├── recipeCard.tsx
│       ├── sidebar.tsx
│       └── ToastNotification.tsx
├── handlers/
├── hooks/
├── layouts/
│   └── CartPopup.tsx
├── pages/
│   ├── About.tsx
│   ├── Checkout.tsx
│   ├── Contact.tsx
│   ├── Dashboard.tsx
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── Privacy.tsx
│   ├── ProductDetails.tsx
│   ├── Shop.tsx
│   ├── SignUp.tsx
│   └── Terms.tsx
├── static/
├── utils/
│   └── PrivateRoute.tsx
├── App.tsx
├── index.css
└── main.tsx
```

---

## Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start development server (Vite)   |
| `npm run build`   | Type-check & build for production |
| `npm run preview` | Preview the production build      |
| `npm run lint`    | Run ESLint across the codebase    |

---

## Pages & Routes

| Route               | Page               | Protected |
| ------------------- | ------------------ | --------- |
| `/`                 | Home               | ❌        |
| `/shop`             | Shop               | ❌        |
| `/about`            | About              | ❌        |
| `/login`            | Login              | ❌        |
| `/signup`           | Sign Up            | ❌        |
| `/contact`          | Contact            | ❌        |
| `/privacy&policy`   | Privacy Policy     | ❌        |
| `/terms&conditions` | Terms & Conditions | ❌        |
| `/product/:id`      | Product Details    | ❌        |
| `/checkout`         | Checkout           | ✅        |
| `/dashboard`        | Dashboard          | ✅        |

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## License

This project is licensed under the [MIT License](./LICENSE).

---

<div align="center">
  Built with ❤️ by <a href="https://github.com/mashrafimahin">Mashrafi Mahin</a>
</div>
