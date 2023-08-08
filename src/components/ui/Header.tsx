"use client";
import Image from "next/image";
import logo from "../../images/logo-portfolio.png";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpenMenu = () => {
    setOpen(true);
  };
  return (
    <header className="header">
      <section className="header__mobile">
        <figure className="header__mobile__logo">
          <Image priority src={logo} alt="Logo | Aldo Parra" />
        </figure>
        <button className="header__mobile__hamburguer" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
      </section>
      <section className={`header__dropshow ${open ? "open" : ""}`}>
        <nav>
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/projects">Proyectos</Link>
            </li>
          </ul>
        </nav>
      </section>
      <div
        className={`header__overlay ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      ></div>
    </header>
  );
};
