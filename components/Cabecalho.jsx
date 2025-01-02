import Link from "next/dist/client/link";

export default function Cabecalho() {
  return (
    <div>
      <Link href={"/"}>
        <h1 id="titulo">www.admtiago.com.br</h1>
      </Link>
      <div>
        <p>Respeito - Responsabilidade - Inovação - Transparência</p>
        <hl></hl>
      </div>
    </div>
  );
}
