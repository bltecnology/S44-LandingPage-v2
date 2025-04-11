import { Header } from "../components/header"; // Usando chaves para importação do Header
import { Footer } from "../components/footer"; // Usando chaves para importação do Footer
import { Outlet } from "react-router-dom";


export const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};
