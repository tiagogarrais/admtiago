import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import ProximasViagens from "../../components/transportes/ProximasViagens";
import Link from "next/link";

export default function Transportes() {
  const { data: session } = useSession();
  const [exibirParagrafo, setExibirParagrafo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExibirParagrafo(false);
    }, 10000); // 10 segundos em milissegundos

    return () => clearTimeout(timer); // Limpar o timer se o componente for desmontado antes do tempo limite
  }, []);

  if (session) {
    return (
      <div className="container my-12 mx-auto px-4 md:px-12">
        <h1>Sistema de Transportes</h1>
        <div className="button"></div>
        <div className="button">
          <Link href="/transportes/solicita">Solicitar viagem</Link>
        </div>
        <div>
          <ProximasViagens />
        </div>

        {exibirParagrafo && (
          <p className="bg-yellow-300">Buscando próximas viagens. Aguarde...</p>
        )}
      </div>
    );
  }

  return (
    <div>
      <p>Para acessar este conteúdo é necessário fazer login</p>
    </div>
  );
}
