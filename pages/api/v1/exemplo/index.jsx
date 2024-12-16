import connect from "../../../../src/utils/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]";

export default async function exemplo(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    try {
      const { method } = req;
      const { db } = await connect();

      switch (method) {
        case "GET":
          res
            .status(200)
            .json("Você está logado e por isso tem acesso a este conteúdo.");
          break;

        case "POST":
          res.status(200).json("Nenhuma funcionalidade para este método");
          break;

        case "DELETE":
          res.status(200).json("Nenhuma funcionalidade para este método");
          break;

        case "PATCH":
          res.status(200).json("Nenhuma funcionalidade para este método");
          break;

        default:
          res.setHeader("Permitido", ["GET", "PATCH", "POST", "DELETE"]);
          res.status(405).end(`Método ${method} não permitido`);
      }
    } catch (err) {
      res.status(500).json({ statuscode: 500, message: err.message });
    }
  } else {
    res.send({
      error: "Este é um serviço privativo para usuários logados.",
    });
  }
}
