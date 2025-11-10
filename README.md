# Joga Comigo 🎮

Conecte-se com pessoas que amam jogar tanto quanto você. Encontre novos amigos, monte times e divirta-se jogando juntos!

![Screenshot da Landing Page do Joga Comigo](public/joga-comigo-landing-page.png) 

## 💬 Sobre o Projeto

O Joga Comigo nasceu da ideia de unir jogadores que têm paixão pelos games, mas nem sempre têm companhia para jogar. Nosso objetivo é criar uma comunidade acolhedora, onde cada partida pode virar uma nova amizade.

### ✨ Por que entrar?

*   **🎯 Encontre parceiros:** Descubra pessoas que jogam os mesmos títulos que você.
*   **💬 Conecte-se fácil:** Converse e combine partidas rapidamente sem complicação.
*   **🏆 Crie grupos:** Monte times fixos para campeonatos ou partidas casuais.

Pronto para jogar junto? Faça login e encontre sua próxima partida com novos amigos!

## 🚀 Funcionalidades Principais

*   **Autenticação de Usuário:** Sistema de login seguro.
*   **Gestão de Perfil:** Personalize seu perfil de jogador.
*   **Exploração de Grupos:** Encontre e participe de grupos de jogos.
*   **Rede de Amigos:** Conecte-se com outros jogadores.
*   **Progressive Web App (PWA):** Instale o aplicativo diretamente no seu dispositivo para uma experiência nativa!

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

*   **Next.js 15+** - Framework React para aplicações web.
*   **React 19+** - Biblioteca JavaScript para construção de interfaces de usuário.
*   **NextAuth.js** - Autenticação flexível para Next.js.
*   **Firebase** - Banco de dados e autenticação (especificamente @auth/firebase-adapter e firebase-admin).
*   **Next-PWA** - Para transformar o projeto em um Progressive Web App.
*   **CSS Modules** e **Global CSS** - Para estilização.

## 📦 Como Rodar Localmente

Siga estas instruções para configurar e rodar o projeto em sua máquina local.

### Pré-requisitos

*   Node.js (v18 ou superior recomendado)
*   npm (ou yarn, pnpm, bun)
*   Conta Firebase configurada com os respectivos segredos para autenticação e banco de dados.

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/Osnigilberto/joga-comigo.git
    cd joga-comigo
    ```
2.  Instale as dependências:
    ```bash
    npm install
    # ou yarn install
    # ou pnpm install
    # ou bun install
    ```
3.  Crie um arquivo `.env.local` na raiz do projeto e adicione suas variáveis de ambiente. Exemplo:
    ```env
    NEXTAUTH_SECRET=sua_secret_aleatoria_aqui
    NEXTAUTH_URL=http://localhost:3000

    # Firebase Admin SDK (se estiver usando)
    FIREBASE_PRIVATE_KEY_ID=
    FIREBASE_PRIVATE_KEY=
    FIREBASE_PROJECT_ID=
    FIREBASE_CLIENT_EMAIL=
    FIREBASE_CLIENT_ID=
    FIREBASE_AUTH_URI=
    FIREBASE_TOKEN_URI=
    FIREBASE_AUTH_PROVIDER_X509_CERT_URL=
    FIREBASE_CLIENT_X509_CERT_URL=
    FIREBASE_UNIVERSE_DOMAIN=

    # Firebase Client SDK (para integração no frontend, se aplicável)
    NEXT_PUBLIC_FIREBASE_API_KEY=
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
    NEXT_PUBLIC_FIREBASE_APP_ID=
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
    ```
    *Certifique-se de obter esses valores do seu projeto Firebase.*

### Rodando o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou yarn dev
# ou pnpm dev
# ou bun dev