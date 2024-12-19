import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? sessionStorage.setItem("email", session.user.email) : ""}
      <div>
        <div className="button">
          <Link href="/cadastro/cadastro">Meu cadastro</Link>
        </div>

        <h2>Biblioteca de objetos digitais</h2>

        <div className="button">
          <a
            href="https://www.conexaofuturo.com.br/mod/hvp/embed.php?id=63"
            target="_blank"
          >
            Conhecendo os sólidos geométricos 1
          </a>
        </div>

        <div className="button">
          <a
            href="https://www.conexaofuturo.com.br/mod/hvp/embed.php?id=64"
            target="_blank"
          >
            Conhecendo os sólidos geométricos 2
          </a>
        </div>

        <div className="button">
          <a
            href="https://www.conexaofuturo.com.br/mod/hvp/view.php?id=57"
            target="_blank"
          >
            Curiosidades sobre a floresta amazônica
          </a>
        </div>

        <div className="button">
          <a
            href="https://www.conexaofuturo.com.br/mod/hvp/view.php?id=58"
            target="_blank"
          >
            Animais da Amazônia
          </a>
        </div>

        <div className="button">
          <a
            href="https://www.conexaofuturo.com.br/mod/hvp/view.php?id=59"
            target="_blank"
          >
            Jogo da memória - Tema: Araucárias
          </a>
        </div>

        <div className="button">
          <a
            href="https://www.conexaofuturo.com.br/mod/hvp/view.php?id=60"
            target="_blank"
          >
            Mata atlântica
          </a>
        </div>

        <div className="button">
          <a
            href="https://www.conexaofuturo.com.br/mod/hvp/view.php?id=61"
            target="_blank"
          >
            Consciência Negra
          </a>
        </div>
      </div>
    </div>
  );
}
