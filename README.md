# ARSENIQ – Premium Airsoft Models & Collectibles

ARSENIQ is a modern, responsive product showcase website designed for airsoft models and non-functional display collectibles. It provides an organized browsing experience with category-based navigation, product details, favorites, and cart management.

## About the Project

The project aims to provide collectors and enthusiasts with a centralized platform to explore and discover different categories of airsoft models and display collectibles.

It offers a clean interface, structured product catalog, and convenient product discovery features.

## Key Features

- **Product Catalog:** Browse products with search, category filters, classification filters, and sorting.
- **Category Navigation:** Explore products organized into six categories.
- **Product Details:** View product descriptions, images, pricing, and specifications.
- **Favorites:** Save and manage favorite products.
- **Shopping Cart:** Add products and manage a demonstration cart.
- **Recently Viewed:** Keep track of previously viewed products.
- **User Dashboard:** Manage profile settings, favorites, and cart summaries.
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.

## Technology Stack

- React.js – Frontend development
- Vite – Development server and build tool
- React Router DOM – Client-side routing
- Tailwind CSS – Styling and responsive design
- Lucide React – Icons
- JavaScript – Application logic

## Prerequisites

Install the following before running the project:

- Node.js (LTS version recommended)
- npm (included with Node.js)
- Git
- Visual Studio Code (recommended)

Check your installations:

```bash
node --version
npm --version
git --version
```

## Installation & Setup

Follow these steps to run ARSENIQ on a new device.

### 1. Clone the repository

```bash
git clone https://github.com/mrsahil767/arseniq.git
```

### 2. Open the project directory

```bash
cd arseniq
```

### 3. Install dependencies

```bash
npm install
```

This installs the dependencies specified in `package.json`.

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in your browser

Visit:

```text
http://localhost:5173
```

The application should now be running locally.

## Available Commands

| Command | Description |
|---|---|
| `npm install` | Install project dependencies |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build |

## Project Structure

```text
ARSENIQ/
├── public/
│   └── images/
├── src/
│   ├── components/
│   ├── contexts/
│   ├── data/
│   │   └── products.json
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Project Purpose & Usefulness

ARSENIQ demonstrates how a modern product showcase platform can improve product discovery through organized categories, detailed product information, search, filtering, and personalized browsing features.

It also serves as a practical frontend development project demonstrating React component architecture, state management, routing, and responsive UI development.

## Important Note

ARSENIQ is currently a demonstration and product showcase project. Cart and profile functionality should not be considered a production payment or order-processing system. Products are maintained using local project data.

## License

This project is intended for educational and demonstration purposes.
