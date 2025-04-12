// // src/components/header.tsx
// import { Link } from "react-router-dom";
// import { FC } from "react";
// import logo from "../assets/logo-s44.png";
// import "../styles/header.css";

// export const Header: FC = () => {
//   return (
//     <header className="s44-header">
//       <div className="container">
//         <div className="left">
//           <div className="logo">
//             <img src={logo} alt="Logo S44" />
//           </div>
//           <nav className="nav-links">
//             <Link to= "#solucoes">Soluções</Link>
//             <Link to= "#conteudo">Conteúdo</Link>
//             <Link to= "#quem-somos">Quem somos</Link>
//             <Link to= "#contato">Contato</Link>
//           </nav>
//         </div>

//         <div className="auth-buttons">
//           <button className="btn disabled" disabled>

//             Entrar
//           </button>
//           <button className="btn primary">
//             Cadastre-se ↗
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

import {
  AlignLeft,
  BookCopy,
  BookText,
  ChevronDown,
  ChevronRight,
  Laptop,
  LucideMessageCircleQuestion,
  MapPin,
  Newspaper,
  PackageOpen,
  Phone,
  RefreshCcw,
  Shield,
  TrendingUpIcon,
  Truck,
  UserCircle,
  UsersRound,
  LogIn,
} from "lucide-react";

import { Link } from "react-router-dom";
import logo from "../assets/logo-s44.png";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../components/ui/hover-card";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../components/ui/sheet";
// import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

import "../styles/header.css";

export function Header() {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <Sheet>
              <SheetTrigger className="mobile-trigger" asChild>
                <button>
                  <AlignLeft className="icon" />
                </button>
              </SheetTrigger>
              <SheetContent className="sheet-content" side={"left"}>
                <nav className="mobile-nav">
                  <div className="user-info">
                  </div>
                  <div className="divider">
                    {[
                      { icon: TrendingUpIcon, label: "Soluções" },
                      { icon: BookCopy, label: "Conteúdo" },
                      { icon: UsersRound, label: "Quem somos" },
                      { icon: Phone, label: "Contato" },
                      { icon: UserCircle, label: "Ver perfil" },
                    ].map(({ icon: Icon, label }) => (
                      <a key={label} href="/" className="nav-link">
                        <div className="nav-icon-label">
                          <Icon className="icon-small" />
                          <span className="label">{label}</span>
                        </div>
                        <ChevronRight strokeWidth={1.5} />
                      </a>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>

            <Link to={"/error"}>
              <div className="logo">
                <img src={logo} alt="Logo S44" />
              </div>
            </Link>

            <nav className="desktop-nav">
              <HoverCard>
                <HoverCardTrigger className="nav-trigger">
                  <span className="nav-text">Soluções</span>
                  <ChevronDown size={16} className="dropdown-icon" />
                </HoverCardTrigger>
                <HoverCardContent className="dropdown-content">
                  {[
                    { icon: MapPin, title: "Rastreamento", desc: "Localização da carga" },
                    { icon: Truck, title: "Gestão de frotas", desc: "Monitoramento de veículos" },
                    { icon: Shield, title: "Seguro", desc: "Proteção contra perdas" },
                    { icon: RefreshCcw, title: "Serviço de logística", desc: "Soluções para devolução" },
                    { icon: PackageOpen, title: "Armazenagem", desc: "Espaços seguros para estocagem" },
                  ].map(({ icon: Icon, title, desc }) => (
                    <Link key={title} to="/error" className="dropdown-item">
                      <Icon size={24} />
                      <div>
                        <h4 className="item-title">{title}</h4>
                        <p className="item-desc">{desc}</p>
                      </div>
                    </Link>
                  ))}
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger className="nav-trigger">
                  <span className="nav-text">Conteúdo</span>
                  <ChevronDown size={16} className="dropdown-icon" />
                </HoverCardTrigger>
                <HoverCardContent className="dropdown-content">
                  {[
                    { icon: Laptop, title: "Blog Educativo", desc: "As melhores práticas" },
                    { icon: Newspaper, title: "Notícias do Setor", desc: "Novas atualizações" },
                    { icon: LucideMessageCircleQuestion, title: "FAQs", desc: "Perguntas frequentes" },
                    { icon: BookText, title: "Guias de Transporte", desc: "Manuais detalhados" },
                  ].map(({ icon: Icon, title, desc }) => (
                    <Link key={title} to="/error" className="dropdown-item">
                      <Icon size={24} />
                      <div>
                        <h4 className="item-title">{title}</h4>
                        <p className="item-desc">{desc}</p>
                      </div>
                    </Link>
                  ))}
                </HoverCardContent>
              </HoverCard>

              <Link to={"/error"} className="nav-link-simple">
                <span className="nav-text">Quem somos</span>
              </Link>
              <Link to={"/error"} className="nav-link-simple">
                <span className="nav-text">Contato</span>
              </Link>
            </nav>
          </div>
          <div className="header-right">
            <button className="btn disabled">
              Entrar
              <LogIn size={16} style={{ marginLeft: "0.25rem" }} />
            </button>
            <button className="btn primary">
              Cadastre-se ↗
              </button>
          </div>
        </div>
      </header>
    </div>
  );
}
