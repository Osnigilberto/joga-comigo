"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./dashboard.module.css";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redireciona se não estiver logado
  if (status === "loading") return <p>Carregando...</p>;
  if (!session) {
    router.push("/");
    return null;
  }

  return (
    <main className={styles.container}>
      <h1>🎮 Bem-vindo, {session.user.name}!</h1>
      <p>Seu e-mail: {session.user.email}</p>

      <div className={styles.content}>
        <h2>Área do Jogador</h2>
        <p>Aqui você poderá ver seus jogos, grupos e conexões.</p>
      </div>

      <button onClick={() => signOut()} className={styles.logout}>
        Sair
      </button>
    </main>
  );
}
