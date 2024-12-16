import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Inventario() {
  const { data: session } = useSession();
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("Por favor, selecione um arquivo CSV.");
      return;
    }

    const reader = new FileReader();

    reader.onload = async (event) => {
      const csvContent = event.target.result;

      try {
        const response = await fetch("/api/v1/inventario", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ csvContent }),
        });

        const result = await response.json();

        if (response.ok) {
          setMessage(`Sucesso: ${JSON.stringify(result.data, null, 2)}`);
        } else {
          setMessage(`Erro: ${result.message}`);
        }
      } catch (error) {
        setMessage(`Erro ao enviar o arquivo: ${error.message}`);
      }
    };

    reader.readAsText(file);
  };

  if (session) {
    return (
      <div>
        <h2>Upload de Inventário CSV</h2>
        <form onSubmit={handleSubmit}>
          <input type="file" accept=".csv" onChange={handleFileChange} />
          <button type="submit">Enviar arquivo CSV</button>
        </form>
        {message && (
          <div>
            <pre>{message}</pre>
          </div>
        )}
      </div>
    );
  }
  return (
    <div>
      <p>Acesso negado, faça login para ver este conteúdo</p>
    </div>
  );
}
