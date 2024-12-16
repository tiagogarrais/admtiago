import connect from "../../../../src/utils/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]";
import csv from "csvtojson";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5mb",
    },
  },
};

export default async function exemplo(req, res) {
  const session = await (req, res, authOptions);

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
          try {
            if (!req.body || !req.body.csvContent) {
              return res.status(400).json({
                status: 400,
                message: "CSV não enviado ou corpo da requisição inválido.",
              });
            }

            const csvContent = req.body.csvContent;
            const jsonData = await csv().fromString(csvContent);

            res.status(200).json({
              status: 200,
              message: "Arquivo CSV convertido com sucesso.",
              data: jsonData,
            });
          } catch (error) {
            res.status(500).json({
              status: 500,
              message:
                "Erro ao processar o arquivo. Tenha certeza que é um CSV válido.",
              error: error.message,
            });
          }
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
