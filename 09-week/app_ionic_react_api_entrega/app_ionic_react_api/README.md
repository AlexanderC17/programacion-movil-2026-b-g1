# Ionic React + Express REST API

## Project Overview
This project demonstrates a mobile application built with Ionic React that consumes a REST API created with Express. The application lists products, allows the user to create a new product, and opens a detail page for each product. The frontend uses `fetch` to communicate with the backend and `useState` to manage the application state. Network and API errors are handled in the user interface.

## Architecture
The backend is an Express REST API that exposes a `GET /api/products` endpoint to return all products. The backend also exposes a `POST /api/products` endpoint to create a new product from a JSON request body. The Ionic React frontend consumes these endpoints using the browser `fetch` API. The React `useState` hook stores products, loading states, form values, and error messages. React Router is used to navigate from the product list to a product detail page. The frontend and backend are separate applications and communicate through HTTP and JSON.

## Project Structure
```text
app_ionic_react_api/
├── backend/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── package.json
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── api.ts
│       ├── types.ts
│       ├── theme/
│       │   └── variables.css
│       └── pages/
│           ├── Home.tsx
│           ├── Detail.tsx
│           └── Create.tsx
└── README.md
```

## Run the backend
```bash
cd backend
npm install
npm start
```

The API runs on `http://localhost:3000`.

## Run the frontend
In another terminal:
```bash
cd frontend
npm install
npm run dev
```

The Ionic React application runs using Vite. Open the local URL shown in the terminal.

## API Endpoints

### GET /api/products
Returns all products.

### POST /api/products
Creates a product. Example JSON:
```json
{
  "name": "Wireless Keyboard",
  "price": 120000,
  "description": "Compact Bluetooth keyboard"
}
```

## Academic Requirements Covered
- Express REST API with GET and POST.
- Ionic React list screen.
- Create form.
- `fetch` for API consumption.
- `useState` for state management.
- Loading and error handling.
- Navigation to a detail screen.
- English `Architecture` section.
