export default function Home() {
  return (
    <div>
      <div>
        <h2>Biblioteca de objetos digitais</h2>

        <a
          onClick={() =>
            window.open(
              "https://www.conexaofuturo.com.br/mod/hvp/embed.php?id=96",
              "_blank",
              "width=800,height=1600,scrollbars=yes"
            )
          }
        >
          <div className="button">Venha para o IFCE!</div>
        </a>

        <div className="button">
          <a
            href="https://www.conexaofuturo.com.br/mod/hvp/embed.php?id=63"
            target="_blank"
          >
            Jogo de arrastar e soltar para conhecer três sólidos geométricos
          </a>
        </div>

        <div className="button">
          <a
            href="https://www.conexaofuturo.com.br/mod/hvp/embed.php?id=64"
            target="_blank"
          >
            Jogo de arrastar e soltar para conhecer mais três sólidos
            geométricos
          </a>
        </div>

        <div className="button">
          <a
            href="https://www.conexaofuturo.com.br/mod/hvp/view.php?id=57"
            target="_blank"
          >
            Três perguntas curiosas sobre a floresta amazônica
          </a>
        </div>

        <div className="button">
          <a
            href="https://www.conexaofuturo.com.br/mod/hvp/view.php?id=58"
            target="_blank"
          >
            Cartões interativos com o tema Animais da Amazônia (nome,
            curiosidade e som)
          </a>
        </div>

        <div className="button">
          <a
            href="https://www.conexaofuturo.com.br/mod/hvp/view.php?id=59"
            target="_blank"
          >
            Jogo da memória com o tema Araucárias
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
            Linha do tempo com o tema consciência negra
          </a>
        </div>
      </div>
    </div>
  );
}
