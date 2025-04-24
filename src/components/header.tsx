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
import { useEffect, useState } from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../components/ui/hover-card";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

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
                  <AlignLeft className="icon text-white" />
                </button>
              </SheetTrigger>
              <SheetContent className="sheet-content" side="left">
                <div className="sheet-header">
                  <img src={logo} alt="Logo S44" className="logo-mobile" />
                  <button className="btn btn-mobile">
                    Entrar
                    <LogIn size={16} style={{ marginLeft: "0.25rem" }} className="text-white" />
                  </button>
                  <button className="btn primary btn-mobile">Cadastre-se ↗</button>
                </div>
                <nav className="mobile-nav">
                  {[{ icon: TrendingUpIcon, label: "Soluções" }, { icon: BookCopy, label: "Conteúdo" }, { icon: UsersRound, label: "Quem somos" }, { icon: Phone, label: "Contato" }, { icon: UserCircle, label: "Ver perfil" }].map(({ icon: Icon, label }) => (
                    <a key={label} href="/" className="nav-link">
                      <div className="nav-icon-label">
                        <Icon className="icon-small text-white" />
                        <span className="label text-white">{label}</span>
                      </div>
                      <ChevronRight strokeWidth={1.5} className="text-white" />
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            <Link to="/error" className="logo-desktop">
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
                  {[{ icon: MapPin, title: "Rastreamento", desc: "Localização da carga" }, { icon: Truck, title: "Gestão de frotas", desc: "Monitoramento de veículos" }, { icon: Shield, title: "Seguro", desc: "Proteção contra perdas" }, { icon: RefreshCcw, title: "Serviço de logística", desc: "Soluções para devolução" }, { icon: PackageOpen, title: "Armazenagem", desc: "Espaços seguros para estocagem" }].map(({ icon: Icon, title, desc }) => (
                    <Link key={title} to="/error" className="dropdown-item group">
                      <Icon size={24} className="text-white group-hover:text-white" />
                      <div>
                        <h4 className="item-title text-white">{title}</h4>
                        <p className="item-desc text-zinc-400">{desc}</p>
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
                  {[{ icon: Laptop, title: "Blog Educativo", desc: "As melhores práticas" }, { icon: Newspaper, title: "Notícias do Setor", desc: "Novas atualizações" }, { icon: LucideMessageCircleQuestion, title: "FAQs", desc: "Perguntas frequentes" }, { icon: BookText, title: "Guias de Transporte", desc: "Manuais detalhados" }].map(({ icon: Icon, title, desc }) => (
                    <Link key={title} to="/error" className="dropdown-item group">
                      <Icon size={24} className="text-white group-hover:text-white" />
                      <div>
                        <h4 className="item-title text-white">{title}</h4>
                        <p className="item-desc text-zinc-400">{desc}</p>
                      </div>
                    </Link>
                  ))}
                </HoverCardContent>
              </HoverCard>

              <Link to="/error" className="nav-link-simple">
                <span className="nav-text">Quem somos</span>
              </Link>
              <Link to="/error" className="nav-link-simple">
                <span className="nav-text">Contato</span>
              </Link>
            </nav>
          </div>

          <div className="header-right">
            <button className="btn disabled desktop-only">
              Entrar
              <LogIn size={16} style={{ marginLeft: "0.25rem" }} className="text-[#3D3D3D]" />
            </button>
            <button className="btn primary desktop-only">
              Cadastre-se ↗
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
