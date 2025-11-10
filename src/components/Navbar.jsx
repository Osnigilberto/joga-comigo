"use client";

import { useEffect, useState } from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();
  const [theme, setTheme] = useState("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Para o menu hambúrguer (mobile)
  const [userDropdownOpen, setUserDropdownOpen] = useState(false); // Para o dropdown do avatar

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setUserDropdownOpen(false); // Fecha o dropdown do usuário se abrir o mobile menu
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
    setMobileMenuOpen(false); // Fecha o mobile menu se abrir o dropdown do usuário
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  };

  const NavigationLinks = ({ onClick }) => (
    <>
      <li><Link href="/dashboard" onClick={onClick}>Início</Link></li>
      <li><Link href="/grupos" onClick={onClick}>Grupos</Link></li>
      <li><Link href="/amigos" onClick={onClick}>Amigos</Link></li>
      <li><Link href="/config" onClick={onClick}>Configurações</Link></li>
    </>
  );

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.left}>
        <Link href="/" className={styles.logo} onClick={closeAllMenus}>
          Joga Comigo 🎮
        </Link>
      </div>

      {/* Menu de Navegação Principal (Desktop Only) */}
      {session && (
        <ul className={styles.mainNavMenu}>
          <NavigationLinks onClick={closeAllMenus} />
        </ul>
      )}

      {/* Botão Hamburger (Mobile Only) */}
      <button className={styles.hamburger} onClick={toggleMobileMenu}>
        {mobileMenuOpen ? "✖" : "☰"}
      </button>

      {/* Dropdown do Menu Mobile (quando hambúrguer ativo) */}
      {session && (
        <ul className={`${styles.mobileMenuDropdown} ${mobileMenuOpen ? styles.active : ""}`}>
          <NavigationLinks onClick={closeAllMenus} />
        </ul>
      )}

      {/* Área da Direita: Tema, Avatar (com dropdown), Sair */}
      <div className={styles.right}>
        {session ? (
          <>
            {/* Botão de Tema */}
            <button onClick={toggleTheme} className={styles.themeToggle}>
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {/* Avatar com Dropdown */}
            <div className={styles.avatarDropdownContainer}>
              <div className={styles.avatarArea} onClick={toggleUserDropdown}>
                <Image
                  src={session.user.image || "/default-avatar.png"}
                  alt="Foto do usuário"
                  width={32}
                  height={32}
                  className={styles.avatar}
                />
              </div>

              {userDropdownOpen && (
                <div className={styles.userDropdown}>
                  <Link href="/profile" onClick={closeAllMenus}>Ver Perfil</Link> {/* Exemplo de link de perfil */}
                  <button onClick={() => { signOut(); closeAllMenus(); }} className={styles.signOutDropdown}>
                    Sair
                  </button>
                </div>
              )}
            </div>

            {/* Botão Sair (Visível apenas em Mobile) */}
            <button onClick={() => { signOut(); closeAllMenus(); }} className={styles.signOutMobile}>
                Sair
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className={styles.signIn}
          >
            Entrar
          </button>
        )}
      </div>
    </nav>
  );
}