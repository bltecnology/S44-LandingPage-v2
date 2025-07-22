// src/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/_home";
import { MainLayout } from "./layout/main-layout";
import { QuemSomos } from "./pages/quemsomos/_quemsomos";
import { Servicos } from "./pages/nossosservicos/_nossosservicos";
import { NossaFrota } from "./pages/nossafrota/_nossafrota";
import { Contato } from "./pages/contato/_contato";
import { ServiceBanner } from "./pages/services/service_banner";
import { EntregaBanner } from "./pages/entregas/entrega_banner";
import { BannerOperacoes } from "./pages/nossasoperaçoes/banner_operacoes";
import { BannerAtendimento } from "./pages/atendimento/banner_atendimento";
import { ExportacaoBanner } from "./pages/exportacao/exportacao_banner";
import { CargasBanner } from "./pages/cargas-sensiveis/banner_cargas";
import { CargasPerigosasBanner } from "./pages/cargas-perigosas/banner_perigosas";
import { ArmazenamentoBanner } from "./pages/armazenamento/banner-armazenamento";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/quem-somos", element: <QuemSomos /> },
      { path: "/servicos", element: <Servicos /> },
      { path: "/nossa-frota", element: <NossaFrota /> },
      { path: "/contato", element: <Contato /> },
      { path: "/service", element: <ServiceBanner /> },
      { path: "/entrega", element: <EntregaBanner /> },
      { path: "/banner-operacoes", element: <BannerOperacoes /> },
      { path: "/banner-atendimento", element: <BannerAtendimento /> },
      { path: "/banner-exportacao", element: <ExportacaoBanner /> },
      { path: "/banner-cargas", element: <CargasBanner /> },
      { path: "/banner-cargas", element: <CargasPerigosasBanner /> },
      { path: "/banner-armazenamento", element: <ArmazenamentoBanner /> },
    ],
  },
]);