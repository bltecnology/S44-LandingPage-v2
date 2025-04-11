// src/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/_home";
import { MainLayout } from "./layout/main-layout";

// Criando o Router com as rotas e layouts
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Layout principal
    children: [
      { path: "/", element: <Home /> },
      
    ],
  },
]);