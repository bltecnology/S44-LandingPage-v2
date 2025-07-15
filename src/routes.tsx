// src/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/_home";
import { MainLayout } from "./layout/main-layout";
import { QuemSomos } from "./pages/quemsomos/_quemsomos";
import { Servicos } from "./pages/nossosservicos/_nossosservicos";
import { NossaFrota } from "./pages/nossafrota/_nossafrota";

// Criando o Router com as rotas e layouts
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Layout principal
    children: [
      { path: "/", element: <Home /> },
      { path: "/quem-somos", element: <QuemSomos /> },
      { path: "/servicos", element: <Servicos /> },
      { path: "/nossa-frota", element: <NossaFrota /> },
      
    ],
  },
]);