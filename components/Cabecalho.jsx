import Link from "next/dist/client/link";
import { useSession } from "next-auth/react";

export default function Cabecalho() {
  const { data: session } = useSession();

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
