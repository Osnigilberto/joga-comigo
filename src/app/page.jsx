"use client";

import { signIn, useSession } from "next-auth/react";
import styles from "./page.module.css";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Joga Comigo 🎮</h1>
        <p className={styles.subtitle}>
          Conecte-se com pessoas que amam jogar tanto quanto você.  
          Encontre novos amigos, monte times e divirta-se jogando juntos!
        </p>
        {!session && (
          <button onClick={() => signIn("google")} className={styles.cta}>
            Entrar com Google
          </button>
        )}
        {session && (
          <p className={styles.loggedIn}>🎉 Bem-vindo, {session.user.name}!</p>
        )}
      </section>

      {/* SOBRE */}
      <section className={styles.about}>
        <h2>💬 Sobre o projeto</h2>
        <p>
          O <strong>Joga Comigo</strong> nasceu da ideia de unir jogadores que
          têm paixão pelos games, mas nem sempre têm companhia pra jogar.
          Nosso objetivo é criar uma comunidade acolhedora, onde cada partida
          pode virar uma nova amizade.
        </p>
      </section>

      {/* BENEFÍCIOS */}
      <section className={styles.benefits}>
        <h2>✨ Por que entrar?</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>🎯 Encontre parceiros</h3>
            <p>Descubra pessoas que jogam os mesmos títulos que você.</p>
          </div>
          <div className={styles.card}>
            <h3>💬 Conecte-se fácil</h3>
            <p>Converse e combine partidas rapidamente sem complicação.</p>
          </div>
          <div className={styles.card}>
            <h3>🏆 Crie grupos</h3>
            <p>Monte times fixos para campeonatos ou partidas casuais.</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={styles.join}>
        <h2>Pronto pra jogar junto?</h2>
        <p>Faça login e encontre sua próxima partida com novos amigos.</p>
        {!session && (
          <button onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
 className={styles.cta}>
            Entrar com Google
          </button>
        )}
      </section>

      <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Joga Comigo — Feito com 💚 por gamers, para gamers.</p>
      </footer>
    </main>
  );
}
